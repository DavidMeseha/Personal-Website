import { Project } from "@/constants/portfolio";
import style from "@/styles/Protofolio.module.scss";

const ProjectCard: React.FC<{
  project: Project;
  inlineStyle: React.CSSProperties;
}> = ({ project, inlineStyle }) => {
  return (
    <div
      className={style.project}
      style={inlineStyle}
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
};

export default ProjectCard;
