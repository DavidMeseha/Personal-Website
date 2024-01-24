import Head from "next/head";
import Intro from "../components/Intro";
import Protofolio from "../components/Protofolio";
import Skills from "../components/Skills";
import Interested from "../components/Interested";
import NavBar from "../components/NavBar";
import { CSSProperties, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import skills, { Skill } from "../constants/skills";
import navBarOptions, { NavOptions } from "../constants/navBarOptions";
import { GetStaticProps } from "next";
import projects, { Project } from "@/constants/portfolio";
import { Theme } from "@/constants/themes";

export default function Home(props: {
  mySkills: Skill[];
  projects: Project[];
}) {
  const router = useRouter();
  const [theme, setTheme] = useState<Theme>("dark");

  const section: NavOptions =
    typeof router.query["section"] == "string" &&
    navBarOptions.includes(router.query["section"])
      ? router.query["section"]
      : "intro";

  const sectionIndex = navBarOptions.indexOf(section);

  const commonSectionStyle: CSSProperties = {
    position: "absolute",
    width: "100%",
    transition: "all 0.4s cubic-bezier(0.65, 0.05, 0.36, 1) 0s",
  };

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

  const interestedSection = {
    transform: `translate(${sectionIndex === 3 ? 0 : sectionIndex > 3 ? -100 : 100}vw, 0)`,
    zIndex: `${sectionIndex === 3 ? 3 : 0}`,
  };

  return (
    <>
      <Head>
        <title>{"David Magdy | " + section}</title>
        <meta
          name="description"
          content="The Front-End developer David Magdy personal profile and protofolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className={theme}>
        <NavBar setTheme={setTheme} theme={theme} />
        <main style={{ height: "100vh", position: "relative" }}>
          <div
            className="section"
            style={{ ...commonSectionStyle, ...introSection }}
          >
            <Intro theme={theme} />
          </div>
          <div
            className="section"
            style={{ ...commonSectionStyle, ...skillsSection }}
          >
            <Skills skills={props.mySkills} />
          </div>
          <div
            className="section"
            style={{ ...commonSectionStyle, ...protofolioSection }}
          >
            <Protofolio projects={props.projects} />
          </div>
          <div
            className="section"
            style={{ ...commonSectionStyle, ...interestedSection }}
          >
            <Interested />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = (() => {
  return {
    props: {
      mySkills: skills,
      projects: projects,
    },
  };
}) satisfies GetStaticProps<{
  mySkills: Skill[];
  projects: Project[];
}>;
