import Protofolio from "@/components/Protofolio";
import { Project } from "@/constants/portfolio";
import projects from "@/constants/portfolio";
import { GetStaticProps } from "next";

export default function devPortfolio({ projects }: { projects: Project[] }) {
  return (
    <div className="section">
      <Protofolio projects={projects} />
    </div>
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
