import { graphicProjects } from "@/constants/GraphicPortfolio";
import { GetStaticProps } from "next";
import style from "@/styles/GraphicPortfolio.module.scss";
import DesignCard from "@/components/DesignCard";

function graphicPortfolio({ projects }: { projects: string[] }) {
  return (
    <div className="section">
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
    </div>
  );
}

export default graphicPortfolio;

export const getStaticProps = (() => {
  return {
    props: {
      projects: graphicProjects,
    },
  };
}) satisfies GetStaticProps<{
  projects: string[];
}>;
