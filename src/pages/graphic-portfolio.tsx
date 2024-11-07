import { graphicProjects } from "@/constants/GraphicPortfolio";
import { GetStaticProps } from "next";
import style from "@/styles/GraphicPortfolio.module.scss";
import DesignCard from "@/components/DesignCard";
import PageAnimationLayout from "@/layouts/PageAnimationLayout";
import Head from "next/head";

function graphicPortfolio({ projects }: { projects: string[] }) {
  return (
    <>
      <Head>
        <title>David Magdy | Graphic Portfolio</title>
        <meta
          key="description"
          name="description"
          content="David Magdy graphic designe portfolio created for actual businesses  and clients"
        />
      </Head>
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
    </>
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
