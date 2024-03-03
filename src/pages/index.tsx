import Head from "next/head";
import Intro from "../components/Intro";
import Protofolio from "../components/Protofolio";
import Skills from "../components/Skills";
import Interested from "../components/Interested";
import NavBar from "../components/NavBar";
import { useState } from "react";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import skills, { Skill } from "../constants/skills";
import { graphicProjects } from "@/constants/GraphicPortfolio";
import navBarOptions, { NavOptions } from "../constants/navBarOptions";
import { GetStaticProps } from "next";
import projects, { Project } from "@/constants/portfolio";
import { Theme } from "@/constants/themes";
import GraphicPortfolio from "@/components/GraphicPortfolio";
import { GraphicProject } from "../constants/GraphicPortfolio";
import { PopupsProvider } from "../context/PopupsContext";

//TODO change to pages insted  of one page

export default function Home(props: {
  mySkills: Skill[];
  projects: Project[];
  graphicProjects: GraphicProject[];
}) {
  const router = useRouter();
  const [theme, setTheme] = useState<Theme>("dark");

  const section: NavOptions =
    typeof router.query["section"] == "string" &&
    navBarOptions.includes(router.query["section"])
      ? router.query["section"]
      : "intro";

  const sectionIndex = navBarOptions.indexOf(section);

  const introSection = {
    transform: `translate(${sectionIndex === 0 ? 0 : -100}vw, 0)`,
    zIndex: `${sectionIndex === 0 ? 3 : 0}`,
  };

  const skillsSection = {
    transform: `translate(${sectionIndex === 1 ? 0 : sectionIndex > 1 ? -100 : 100}vw, 0)`,
    zIndex: `${sectionIndex === 1 ? 3 : 0}`,
  };

  const protofolioSection = {
    transform: `translate(${sectionIndex === 2 ? 0 : sectionIndex > 2 ? -100 : 100}vw, 0)`,
    zIndex: `${sectionIndex === 2 ? 3 : 0}`,
  };

  const graphicSection = {
    transform: `translate(${sectionIndex === 3 ? 0 : sectionIndex > 3 ? -100 : 100}vw, 0)`,
    zIndex: `${sectionIndex === 3 ? 3 : 0}`,
  };

  const interestedSection = {
    transform: `translate(${sectionIndex === 4 ? 0 : sectionIndex > 4 ? -100 : 100}vw, 0)`,
    zIndex: `${sectionIndex === 4 ? 3 : 0}`,
  };

  return (
    <>
      <Head>
        <title>{"David Magdy | " + section}</title>
        <meta
          name="description"
          content="The Front-End developer David Magdy personal profile and protofolio"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/logo.svg"
        />
      </Head>
      <div className={theme}>
        <PopupsProvider>
          <NavBar
            setTheme={setTheme}
            theme={theme}
          />
          <main style={{ height: "100vh", position: "relative" }}>
            <div
              className="section"
              style={{ ...introSection }}
            >
              <Intro theme={theme} />
            </div>
            <div
              className="section"
              style={{ ...skillsSection }}
            >
              <Skills skills={props.mySkills} />
            </div>
            <div
              className="section"
              style={{ ...protofolioSection }}
            >
              <Protofolio projects={props.projects} />
            </div>
            <div
              className="section"
              style={{ ...graphicSection }}
            >
              <GraphicPortfolio projects={graphicProjects} />
            </div>
            <div
              className="section"
              style={{ ...interestedSection }}
            >
              <Interested />
            </div>
          </main>
          <Footer />
        </PopupsProvider>
      </div>
    </>
  );
}

export const getStaticProps = (() => {
  return {
    props: {
      mySkills: skills,
      projects: projects,
      graphicProjects: graphicProjects,
    },
  };
}) satisfies GetStaticProps<{
  mySkills: Skill[];
  projects: Project[];
  graphicProjects: GraphicProject[];
}>;
