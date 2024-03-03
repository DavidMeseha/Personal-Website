import { GraphicProject } from "@/constants/GraphicPortfolio";
import style from "../styles/GraphicPortfolio.module.scss";
import DesignCard from "./DesignCard";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function GraphicPortfolio({
  projects,
}: {
  projects: GraphicProject[];
}) {
  const projectsContainer = useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <div
      ref={projectsContainer}
      className={style.container}
      style={{
        overflow:
          router.query["section"] === "graphic-portfolio" ? "auto" : "hidden",
      }}
    >
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
