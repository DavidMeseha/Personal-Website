export interface SkillSet {
  skill: string;
  level: number;
}

export interface Skill {
  title: string;
  skillSet: Array<SkillSet>;
}

export default [
  {
    title: "Front End",
    skillSet: [
      {
        skill: "HTML/CSS/JS",
        level: 95,
      },
      {
        skill: "Sass/Scss",
        level: 80,
      },
      {
        skill: "React.js",
        level: 98,
      },
      {
        skill: "Next.js 13",
        level: 92,
      },
      {
        skill: "Vue.js",
        level: 72,
      },
      {
        skill: "UI/UX",
        level: 80,
      },
    ],
  },
  {
    title: "Extra",
    skillSet: [
      {
        skill: "TypeScript",
        level: 80,
      },
      {
        skill: "Tailwind CSS",
        level: 98,
      },
      {
        skill: "Cypress(e2e)",
        level: 62,
      },
    ],
  },
  {
    title: "Back End",
    skillSet: [
      {
        skill: "Node.js",
        level: 66,
      },
      {
        skill: "Auth",
        level: 90,
      },
      {
        skill: "MongoDB",
        level: 80,
      },
    ],
  },
  {
    title: "Programming",
    skillSet: [
      {
        skill: "Problem Solving",
        level: 95,
      },
      {
        skill: "Clean Coding",
        level: 90,
      },
      {
        skill: "Mathematics",
        level: 90,
      },
      {
        skill: "Data structure",
        level: 70,
      },
    ],
  },
  {
    title: "Soft Skills",
    skillSet: [
      {
        skill: "depandability",
        level: 86,
      },
      {
        skill: "Creativity",
        level: 82,
      },
    ],
  },
];
