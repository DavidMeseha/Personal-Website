import style from "../styles/GraphicPortfolio.module.scss";
import DesignCard from "./DesignCard";
import { useRef } from "react";

export default function GraphicPortfolio({ projects }: { projects: string[] }) {
  const projectsContainer = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={projectsContainer}
      className={style.container}
      style={{
        overflow: "auto",
      }}
    >
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
