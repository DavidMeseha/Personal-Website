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
      <div
        className=""
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h1 className={style.heading}>{project.title}</h1>
        <div style={{ fontSize: 12 }}>
          <div style={{ marginBottom: 4 }}>
            Created :{" "}
            {new Date(project.createdAt).toLocaleDateString("en", {
              month: "long",
              year: "numeric",
            })}
          </div>
          <div>
            Last Update :{" "}
            {new Date(project.updatedAt).toLocaleDateString("en", {
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
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
