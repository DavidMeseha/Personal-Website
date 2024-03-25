import style from "../styles/GraphicPortfolio.module.scss";
import DesignCard from "./DesignCard";

export default function GraphicPortfolio({ projects }: { projects: string[] }) {
  return (
    <div className={style.container}>
      <div className={style.projectGrid}>
        {projects.map((project, index) => (
          <DesignCard
            projectURL={project}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
