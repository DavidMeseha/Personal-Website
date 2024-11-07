import DevProtofolio from "@/components/DevProtofolio";
import { Project } from "@/constants/portfolio";
import projects from "@/constants/portfolio";
import PageAnimationLayout from "@/layouts/PageAnimationLayout";
import { GetStaticProps } from "next";
import Head from "next/head";

export default function devPortfolio({ projects }: { projects: Project[] }) {
  return (
    <>
      <Head>
        <title>David Magdy | Dev Portfolio</title>
        <meta
          key="description"
          name="description"
          content="David Magdy Web demos portfolio showing my skills in demos i create from scratch"
        />
      </Head>
      <div className="section">
        <PageAnimationLayout>
          <DevProtofolio projects={projects} />
        </PageAnimationLayout>
      </div>
    </>
  );
}

export const getStaticProps = (() => {
  return {
    props: {
      projects: projects,
    },
  };
}) satisfies GetStaticProps<{
  projects: Project[];
}>;
