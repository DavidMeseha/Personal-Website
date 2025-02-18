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
        level: 100,
      },
      {
        skill: "Next.js 14-15",
        level: 95,
      },
      {
        skill: "UI/UX",
        level: 85,
      },
      {
        skill: "SEO",
        level: 90,
      },
    ],
  },
  {
    title: "Extra",
    skillSet: [
      {
        skill: "TypeScript",
        level: 97,
      },
      {
        skill: "Tailwind CSS",
        level: 98,
      },
      {
        skill: "Cypress(e2e)",
        level: 89,
      },
      {
        skill: "React Testing Library",
        level: 90,
      },
      {
        skill: "THREE.js/R3F/3D",
        level: 85,
      },
    ],
  },
  {
    title: "Back End",
    skillSet: [
      {
        skill: "Node.js",
        level: 85,
      },
      {
        skill: "Auth",
        level: 95,
      },
      {
        skill: "MongoDB",
        level: 90,
      },
      {
        skill: "SupaBase",
        level: 60,
      },
      {
        skill: "SQL/Postgres",
        level: 65,
      },
      {
        skill: "Socket.io",
        level: 80,
      },
    ],
  },
  {
    title: "Environment",
    skillSet: [
      {
        skill: "Git",
        level: 95,
      },
      {
        skill: "VSCode/Cursor",
        level: 95,
      },
      {
        skill: "Figma/Adobe",
        level: 85,
      },
      {
        skill: "Agile/Scrum",
        level: 70,
      },
      {
        skill: "AI Utilization",
        level: 90,
      },
    ],
  },
];
