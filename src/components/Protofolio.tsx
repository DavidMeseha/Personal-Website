import style from "@/styles/Protofolio.module.scss";
import { useEffect, useRef, useState } from "react";
import { useWindowHeight, useWindowWidth } from "@react-hook/window-size";
import { Project } from "@/constants/portfolio";

const Protofolio: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const windowHeight = useWindowHeight();
  const windowWidth = useWindowWidth();

  const [display, setDisplay] = useState<Project[]>();
  const [waitAnimation, setWaitanimation] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const r1Margin = windowWidth < 769 ? (windowWidth < 426 ? -220 : -150) : -90;
  const r2MaxHeight = windowWidth < 769 ? (windowWidth < 426 ? 360 : 600) : 220;

  const rank1 = {
    zIndex: 2,
    margin:
      windowWidth < 769
        ? windowWidth < 426
          ? "-220px 0"
          : "-150px 0"
        : "-90px 0",
    maxHeight: windowWidth < 769 ? "600px" : "220px",
    transform: "scale(1)",
    opacity: 1,
    padding: "30px",
    transition: "all 0.9s",
  };

  const rank2 = {
    margin: 0,
    maxHeight:
      windowWidth < 769 ? (windowWidth < 426 ? "360px" : "600px") : "220px",
    transform: "scale(0.5)",
    opacity: 0.2,
    padding: "30px",
    zIndex: 0,
    transition: "all 1s",
  };

  const rank3 = {
    margin: 0,
    zIndex: 0,
    transform: "scale(0)",
    opacity: 0,
    maxHeight: 0,
    padding: 0,
    transition: "all 0.6s",
  };

  let key: keyof CSSStyleDeclaration &
    (keyof typeof rank3 | keyof typeof rank1 | keyof typeof rank2);

  useEffect(() => {
    const displayArraySetting = () => {
      const projectsCount = projects.length;
      const temp = [];
      let index = 0;

      for (let times = 0; times < 5; times++, index++) {
        if (times % projectsCount === 0 && times !== 0)
          index = projectsCount - 2;
        temp.push(projects[index]);
      }

      setDisplay(temp);
    };

    displayArraySetting();
  }, []);

  const nextProject = () => {
    if (!projectsRef.current) return;
    if (waitAnimation) return;
    setWaitanimation(true);

    const children = projectsRef.current
      .children as HTMLCollectionOf<HTMLElement>;
    const firstChild = children[0];

    for (key in rank3) {
      children[0].style.setProperty(key, `${rank3[key]}`);
    }

    for (key in rank3) {
      children[1].style.setProperty(key, `${rank3[key]}`);
    }

    for (key in rank2) {
      children[2].style.setProperty(key, `${rank2[key]}`);
    }

    for (key in rank1) {
      children[3].style.setProperty(key, `${rank1[key]}`);
    }

    for (key in rank3) {
      children[4].style.setProperty(key, `${rank2[key]}`);
    }

    projectsRef.current.removeChild(projectsRef.current.children[0]);
    projectsRef.current.append(firstChild);

    setTimeout(() => setWaitanimation(false), 900);
  };

  const prevProject = () => {
    if (waitAnimation) return;
    if (!projectsRef.current) return;
    setWaitanimation(true);

    const children = projectsRef.current
      .children as HTMLCollectionOf<HTMLElement>;
    const lastChild = children[4];

    for (key in rank2) {
      children[0].style.setProperty(key, `${rank2[key]}`);
    }

    for (key in rank1) {
      children[1].style.setProperty(key, `${rank1[key]}`);
    }

    for (key in rank2) {
      children[2].style.setProperty(key, `${rank2[key]}`);
    }

    for (key in rank3) {
      children[3].style.setProperty(key, `${rank3[key]}`);
    }

    for (key in rank3) {
      children[4].style.setProperty(key, `${rank3[key]}`);
    }

    projectsRef.current.removeChild(projectsRef.current.children[4]);
    projectsRef.current.prepend(lastChild);

    setTimeout(() => setWaitanimation(false), 900);
  };

  const resetProjectsDrag = () => {
    if (!projectsRef.current) return;
    const children = projectsRef.current
      .children as HTMLCollectionOf<HTMLElement>;
    let child = children[0];

    child.style.transition = rank3.transition;
    child = children[1];
    child.style.transition = rank2.transition;
    child = children[2];
    child.style.transition = rank1.transition;
    child = children[3];
    child.style.transition = rank2.transition;
    child = children[4];
    child.style.transition = rank3.transition;

    for (key in rank3) {
      children[0].style.setProperty(key, `${rank3[key]}`);
    }

    for (key in rank2) {
      children[1].style.setProperty(key, `${rank2[key]}`);
    }

    for (key in rank1) {
      children[2].style.setProperty(key, `${rank1[key]}`);
    }

    for (key in rank2) {
      children[3].style.setProperty(key, `${rank2[key]}`);
    }

    for (key in rank3) {
      children[4].style.setProperty(key, `${rank3[key]}`);
    }
  };

  const touchStartHandle = (event: React.TouchEvent) => {
    if (!projectsRef.current) return;

    const children = projectsRef.current
      .children as HTMLCollectionOf<HTMLElement>;
    setTouchStart(event.targetTouches[0].clientY);

    let child = children[0];
    child.style.transition = "unset";
    child = children[1];
    child.style.transition = "unset";
    child = children[2];
    child.style.transition = "unset";
    child = children[3];
    child.style.transition = "unset";
    child = children[4];
    child.style.transition = "unset";
  };

  const touchMoveHandle = (event: React.TouchEvent) => {
    if (!projectsRef.current) return;
    const children = projectsRef.current
      .children as HTMLCollectionOf<HTMLElement>;
    let child: HTMLElement;
    const position = event.targetTouches[0].clientY;
    const distance = position - touchStart;
    const max = windowHeight / 2;
    let percent;

    if (distance < 0) {
      percent = (distance * -1) / max;
      if (percent > 1) percent = 1;

      child = children[4];
      child.style.transform = `scale(${0.5 * percent})`;
      child = children[4];
      child.style.maxHeight = `${r2MaxHeight * percent}px`;
      child = children[4];
      child.style.opacity = `${0.2 * percent}`;
      child = children[4];
      child.style.padding = `${30 * percent}px`;

      child = children[4];
      child.style.transform = `scale(${0.5 + 0.5 * percent})`;
      child = children[4];
      child.style.opacity = `${0.2 + 0.8 * percent}`;
      child = children[4];
      child.style.maxHeight = `${r2MaxHeight + (600 - r2MaxHeight) * percent}px`;
      child = children[4];
      child.style.margin = `${r1Margin * percent}px 0`;
      child = children[1];
      if (percent > 0.5) child.style.zIndex = "2";

      child = children[2];
      child.style.transform = `scale(${1 - 0.5 * percent})`;
      child = children[2];
      child.style.opacity = `${1 - 0.8 * percent}`;
      child = children[2];
      child.style.maxHeight = `${600}px`;
      child = children[2];
      child.style.margin = `${r1Margin - r1Margin * percent}px 0`;
      child = children[2];
      if (percent > 0.5) child.style.zIndex = "1";

      child = children[1];
      child.style.transform = `scale(${0.5 - 0.5 * percent})`;
      child = children[1];
      child.style.opacity = `${0.2 - 0.2 * percent}`;
      child = children[1];
      child.style.maxHeight = `${r2MaxHeight - r2MaxHeight * percent}px`;
      child = children[1];
      child.style.padding = `${30 - 30 * percent}px`;
    } else {
      percent = distance / max;
      if (percent > 1) percent = 1;

      child = children[0];
      child.style.transform = `scale(${0.5 * percent})`;
      child = children[0];
      child.style.maxHeight = `${r2MaxHeight * percent}px`;
      child = children[0];
      child.style.opacity = `${0.2 * percent}`;
      child = children[0];
      child.style.padding = `${30 * percent}px`;

      child = children[1];
      child.style.transform = `scale(${0.5 + 0.5 * percent})`;
      child = children[1];
      child.style.opacity = `${0.2 + 0.8 * percent}`;
      child = children[1];
      child.style.maxHeight = `${r2MaxHeight + (600 - r2MaxHeight) * percent}px`;
      child = children[1];
      child.style.margin = `${r1Margin * percent}px 0`;
      child = children[1];
      if (percent > 0.6) child.style.zIndex = "2";

      child = children[2];
      child.style.transform = `scale(${1 - 0.5 * percent})`;
      child = children[2];
      child.style.opacity = `${1 - 0.8 * percent}`;
      child = children[2];
      child.style.maxHeight = `${600}px`;
      child = children[2];
      child.style.margin = `${r1Margin - r1Margin * percent}px 0`;
      child = children[2];
      if (percent > 0.6) child.style.zIndex = "1";

      child = children[3];
      child.style.transform = `scale(${0.5 - 0.5 * percent})`;
      child = children[3];
      child.style.opacity = `${0.2 - 0.2 * percent}`;
      child = children[3];
      child.style.maxHeight = `${r2MaxHeight - r2MaxHeight * percent}px`;
      child = children[3];
      child.style.padding = `${30 - 30 * percent}px`;
    }
  };

  const touchEndHandle = (event: React.TouchEvent) => {
    if (!projectsRef.current) return;
    const touchEnd = event.changedTouches[0].clientY;
    const children = projectsRef.current
      .children as HTMLCollectionOf<HTMLElement>;
    let child: HTMLElement;
    child = children[0];
    child.style.transition = rank3.transition;
    child = children[1];
    child.style.transition = rank2.transition;
    child = children[2];
    child.style.transition = rank1.transition;
    child = children[3];
    child.style.transition = rank2.transition;
    child = children[4];
    child.style.transition = rank3.transition;

    if (touchEnd - touchStart < -20) nextProject();
    if (touchEnd - touchStart > 20) prevProject();
    if (!(touchEnd - touchStart > 20) || !(touchEnd - touchStart < -20))
      resetProjectsDrag();
  };

  return (
    <div className={style.container}>
      <div className={style.projectsRoller}>
        <div
          onClick={prevProject}
          className={style.topNavClickSpace}
        ></div>
        <div
          onTouchEnd={touchEndHandle}
          onTouchStart={touchStartHandle}
          onTouchMove={touchMoveHandle}
          className={style.projects}
          ref={projectsRef}
        >
          {display?.map((project, i) => {
            return (
              <div
                key={i}
                className={style.project}
                style={i === 0 || i === 4 ? rank3 : i === 2 ? rank1 : rank2}
              >
                <h1 className={style.heading}>{project.title}</h1>
                <div className={style.description}>
                  <div>
                    <h2 className={style.supHeading}>Technologies</h2>
                    <p>{project.technologies}</p>
                  </div>
                  <div>
                    <h2 className={style.supHeading}>Features</h2>
                    <p>{project.features}</p>
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ margin: "20px 0 0 0" }}>
                    <span>
                      <a
                        href={`${project.link}`}
                        target="_blank"
                      >
                        Visit website ?
                      </a>
                    </span>
                  </div>
                  <div style={{ margin: "20px 0 0 0" }}>
                    <span>
                      <a
                        href={`${project.code}`}
                        target="_blank"
                      >
                        View Source ?
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          onClick={nextProject}
          className={style.bottomNavClickSpace}
        ></div>
      </div>
    </div>
  );
};
export default Protofolio;
