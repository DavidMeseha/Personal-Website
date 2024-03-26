import { graphicProjects } from "@/constants/GraphicPortfolio";
import { GetStaticProps } from "next";
import style from "@/styles/GraphicPortfolio.module.scss";
import DesignCard from "@/components/DesignCard";
import PageAnimationLayout from "@/layouts/PageAnimationLayout";

function graphicPortfolio({ projects }: { projects: string[] }) {
  return (
    <div className="section">
      <PageAnimationLayout>
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
      </PageAnimationLayout>
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
