import Skills from "@/components/Skills";
import skills, { Skill } from "@/constants/skills";
import { GetStaticProps } from "next";

export default function davidSkills({ mySkills }: { mySkills: Skill[] }) {
  return (
    <div className="section">
      <Skills skills={mySkills} />
    </div>
  );
}

export const getStaticProps = (() => {
  return {
    props: {
      mySkills: skills,
    },
  };
}) satisfies GetStaticProps<{
  mySkills: Skill[];
}>;
