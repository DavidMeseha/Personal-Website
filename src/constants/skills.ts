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
        level: 90,
      },
      {
        skill: "Sass/Scss",
        level: 89,
      },
      {
        skill: "React.js",
        level: 84,
      },
      {
        skill: "Next.js 13",
        level: 92,
      },
      {
        skill: "SEO",
        level: 90,
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
        level: 70,
      },
      {
        skill: "Tailwind CSS",
        level: 98,
      },
      {
        skill: "Framer Motion",
        level: 80,
      },
      {
        skill: "Cypress(e2e)",
        level: 85,
      },
    ],
  },
  {
    title: "Back End",
    skillSet: [
      {
        skill: "Node.js",
        level: 80,
      },
      {
        skill: "Auth",
        level: 80,
      },
      {
        skill: "MongoDB",
        level: 86,
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
        level: 82,
      },
      {
        skill: "Mathematics",
        level: 90,
      },
      {
        skill: "Algorithms",
        level: 70,
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
