import style from "@/styles/Protofolio.module.scss";
import { useEffect, useRef, useState } from "react";
import { useWindowHeight, useWindowWidth } from "@react-hook/window-size";
import { Project } from "@/constants/portfolio";
import DevProjectCard from "./DevProjectCard";
import Loading from "./Loading";

const Protofolio: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const windowHeight = useWindowHeight();
  const windowWidth = useWindowWidth();

  const [render, reRender] = useState<boolean>(true);
  const [display, setDisplay] = useState<Project[]>([]);
  const [waitAnimation, setWaitanimation] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [projectIndex, setProjectIndex] = useState(2);

  const r1Margin = windowWidth < 769 ? (windowWidth < 426 ? -220 : -150) : -90;
  const r2MaxHeight = windowWidth < 769 ? (windowWidth < 426 ? 360 : 600) : 220;

  interface Rank {
    zIndex: number;
    margin: string;
    maxHeight: string;
    transform: string;
    opacity: number;
    padding: string;
    transition: string;
  }

  const rank1: Rank = {
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

  const rank2: Rank = {
    margin: "0",
    maxHeight:
      windowWidth < 769 ? (windowWidth < 426 ? "360px" : "600px") : "220px",
    transform: "scale(0.5)",
    opacity: 0.2,
    padding: "30px",
    zIndex: 0,
    transition: "all 1s",
  };

  const rank3: Rank = {
    margin: "0",
    zIndex: 0,
    transform: "scale(0)",
    opacity: 0,
    maxHeight: "0",
    padding: "0",
    transition: "all 0.6s",
  };

  useEffect(() => {
    setDisplay([...projects]);

    function reRenderProjects() {
      reRender(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => reRender(true), 1000);
    }

    window.addEventListener("resize", reRenderProjects);
    return () => window.removeEventListener("resize", reRenderProjects);
  }, []);

  const nextProject = () => {
    if (!projectsRef.current) return;
    if (waitAnimation) return;
    setWaitanimation(true);

    const children = projectsRef.current
      .children as HTMLCollectionOf<HTMLElement>;
    const firstChild = children[0];

    Object.assign(children[0].style, rank3);
    Object.assign(children[1].style, rank3);
    Object.assign(children[2].style, rank2);
    Object.assign(children[3].style, rank1);
    Object.assign(children[4].style, rank2);

    projectsRef.current.removeChild(firstChild);
    projectsRef.current.append(firstChild);
    setProjectIndex((prev) => (prev + 1) % display.length);

    setTimeout(() => {
      setWaitanimation(false);
    }, 900);
  };

  const prevProject = () => {
    if (waitAnimation) return;
    if (!projectsRef.current) return;
    setWaitanimation(true);

    const children = projectsRef.current
      .children as HTMLCollectionOf<HTMLElement>;
    const lastChild = projectsRef.current.lastChild as HTMLElement;

    Object.assign(children[0].style, rank2);
    Object.assign(children[1].style, rank1);
    Object.assign(children[2].style, rank2);
    Object.assign(children[3].style, rank3);
    Object.assign(children[4].style, rank3);

    projectsRef.current.removeChild(lastChild);
    projectsRef.current.prepend(lastChild);
    setProjectIndex((prev) => (prev - 1 < 0 ? display.length - 1 : prev - 1));

    setTimeout(() => setWaitanimation(false), 900);
  };

  const resetProjectsDrag = () => {
    if (!projectsRef.current) return;
    const children = projectsRef.current
      .children as HTMLCollectionOf<HTMLElement>;

    Object.assign(children[0].style, rank3);
    Object.assign(children[1].style, rank2);
    Object.assign(children[2].style, rank1);
    Object.assign(children[3].style, rank2);
    Object.assign(children[4].style, rank3);
  };

  const touchStartHandle = (event: React.TouchEvent) => {
    if (!projectsRef.current) return;
    setTouchStart(event.targetTouches[0].clientY);

    const children = projectsRef.current
      .children as HTMLCollectionOf<HTMLElement>;

    // removed transition effect for Drag reaction
    children[0].style.transition = "unset";
    children[1].style.transition = "unset";
    children[2].style.transition = "unset";
    children[3].style.transition = "unset";
    children[4].style.transition = "unset";
  };

  const touchMoveHandle = (event: React.TouchEvent) => {
    if (!projectsRef.current) return;
    const children = projectsRef.current
      .children as HTMLCollectionOf<HTMLElement>;

    const position = event.targetTouches[0].clientY;
    const distance = position - touchStart;
    const max = windowHeight / 2;
    let percent;

    if (distance < 0) {
      percent = Math.abs(distance) / max;
      if (percent > 1) percent = 1;

      children[4].style.transform = `scale(${0.5 * percent})`;
      children[4].style.maxHeight = `${r2MaxHeight * percent}px`;
      children[4].style.opacity = `${0.2 * percent}`;
      children[4].style.padding = `${30 * percent}px`;

      children[3].style.transform = `scale(${0.5 + 0.5 * percent})`;
      children[3].style.opacity = `${0.2 + 0.8 * percent}`;
      children[3].style.maxHeight = `${r2MaxHeight + (600 - r2MaxHeight) * percent}px`;
      children[3].style.margin = `${r1Margin * percent}px 0`;
      if (percent > 0.5) children[3].style.zIndex = "2";

      children[2].style.transform = `scale(${1 - 0.5 * percent})`;
      children[2].style.opacity = `${1 - 0.8 * percent}`;
      children[2].style.maxHeight = `${600}px`;
      children[2].style.margin = `${r1Margin - r1Margin * percent}px 0`;
      if (percent > 0.5) children[2].style.zIndex = "1";

      children[1].style.transform = `scale(${0.5 - 0.5 * percent})`;
      children[1].style.opacity = `${0.2 - 0.2 * percent}`;
      children[1].style.maxHeight = `${r2MaxHeight - r2MaxHeight * percent}px`;
      children[1].style.padding = `${30 - 30 * percent}px`;
    } else {
      percent = distance / max;
      if (percent > 1) percent = 1;

      children[0].style.transform = `scale(${0.5 * percent})`;
      children[0].style.maxHeight = `${r2MaxHeight * percent}px`;
      children[0].style.opacity = `${0.2 * percent}`;
      children[0].style.padding = `${30 * percent}px`;

      children[1].style.transform = `scale(${0.5 + 0.5 * percent})`;
      children[1].style.opacity = `${0.2 + 0.8 * percent}`;
      children[1].style.maxHeight = `${r2MaxHeight + (600 - r2MaxHeight) * percent}px`;
      children[1].style.margin = `${r1Margin * percent}px 0`;
      if (percent > 0.6) children[1].style.zIndex = "2";

      children[2].style.transform = `scale(${1 - 0.5 * percent})`;
      children[2].style.opacity = `${1 - 0.8 * percent}`;
      children[2].style.maxHeight = `${600}px`;
      children[2].style.margin = `${r1Margin - r1Margin * percent}px 0`;
      if (percent > 0.6) children[2].style.zIndex = "1";

      children[3].style.transform = `scale(${0.5 - 0.5 * percent})`;
      children[3].style.opacity = `${0.2 - 0.2 * percent}`;
      children[3].style.maxHeight = `${r2MaxHeight - r2MaxHeight * percent}px`;
      children[3].style.padding = `${30 - 30 * percent}px`;
    }
  };

  const touchEndHandle = (event: React.TouchEvent) => {
    if (!projectsRef.current) return;
    const touchEnd = event.changedTouches[0].clientY;

    const children = projectsRef.current
      .children as HTMLCollectionOf<HTMLElement>;

    children[0].style.transition = rank3.transition;
    children[1].style.transition = rank2.transition;
    children[2].style.transition = rank1.transition;
    children[3].style.transition = rank2.transition;
    children[4].style.transition = rank3.transition;

    if (touchEnd - touchStart < -20) nextProject();
    if (touchEnd - touchStart > 20) prevProject();
    if (!(touchEnd - touchStart > 20) || !(touchEnd - touchStart < -20))
      resetProjectsDrag();
  };

  return (
    <>
      {render ? (
        <>
          <div className={style["project-indecator"]}>
            {display.map((_project, i) => {
              return (
                <div
                  className={`${style["dots"]} ${i === projectIndex ? style["active"] : ""}`}
                  key={i}
                ></div>
              );
            })}
          </div>
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
                {display.map((project, i) => {
                  return (
                    <DevProjectCard
                      key={i}
                      project={project}
                      inlineStyle={
                        i === 0 || i >= 4 ? rank3 : i === 2 ? rank1 : rank2
                      }
                    />
                  );
                })}
              </div>
              <div
                onClick={nextProject}
                className={style.bottomNavClickSpace}
              ></div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default Protofolio;
