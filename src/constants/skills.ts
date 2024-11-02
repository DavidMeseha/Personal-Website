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
        level: 99,
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
        skill: "Next.js 14-15",
        level: 94,
      },
      {
        skill: "Vue.js",
        level: 55,
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
        level: 95,
      },
      {
        skill: "Tailwind CSS",
        level: 98,
      },
      {
        skill: "Cypress(e2e)",
        level: 60,
      },
      {
        skill: "React Testing Library",
        level: 80,
      },
    ],
  },
  {
    title: "Back End",
    skillSet: [
      {
        skill: "Node.js",
        level: 75,
      },
      {
        skill: "Auth",
        level: 90,
      },
      {
        skill: "MongoDB",
        level: 85,
      },
      {
        skill: "SupaBase",
        level: 75,
      },
      {
        skill: "MVC",
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
        skill: "Mathematics",
        level: 80,
      },
    ],
  },
];
