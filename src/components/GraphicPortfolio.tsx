import { GraphicProject } from "@/constants/GraphicPortfolio";
import style from "../styles/GraphicPortfolio.module.scss";
import DesignCard from "./DesignCard";

export default function GraphicPortfolio({
  projects,
}: {
  projects: GraphicProject[];
}) {
  return (
    <div className={style.container}>
      <div className={style.projectGrid}>
        {projects.map((project, index) => (
          <DesignCard
            project={project}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
