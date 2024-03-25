import GraphicPortfolio from "@/components/GraphicPortfolio";
import { graphicProjects } from "@/constants/GraphicPortfolio";
import { GetStaticProps } from "next";

function graphicPortfolio({ graphicProjects }: { graphicProjects: string[] }) {
  return (
    <div className="section">
      <GraphicPortfolio projects={graphicProjects} />
    </div>
  );
}

export default graphicPortfolio;

export const getStaticProps = (() => {
  return {
    props: {
      graphicProjects: graphicProjects,
    },
  };
}) satisfies GetStaticProps<{
  graphicProjects: string[];
}>;
