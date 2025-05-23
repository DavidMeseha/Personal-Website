export interface Project {
  title: string;
  technologies: string;
  features: string;
  link: string;
  code: string | false;
  createdAt: string;
  updatedAt: string;
}

export const projects: Project[] = [
  {
    title: "Charts",
    technologies: "Dashboard look with React.js and TypeScript using ReCharts",
    features:
      "Dashboard with data visualization in different forms with grid layout and clean look",
    link: "https://dashboard-sable-pi.vercel.app/",
    code: "https://github.com/DavidMeseha/dashboard",
    createdAt: "03/01/2023",
    updatedAt: "03/01/2023",
  },

  {
    title: "CV job applications dashboard",
    technologies:
      "Next.js-14, React.js-18, Matrial UI, tailwindcss-3, server actions as an endpoint",
    features:
      "A fully responsive dashboard with sorting and filttering data with alot of informations",
    code: "https://github.com/DavidMeseha/tech_assessment",
    link: "https://tech-assessment-ten.vercel.app/",
    createdAt: "11/01/2024",
    updatedAt: "5/01/2024",
  },

  {
    title: "Fullstack Ecommerce (MERN)",
    technologies:
      "Next.js 14, React.js, Node.js, Mongodb, headless architecture, Jest(React Testing Lib)",
    features:
      "JWT Auth, Cart, Save, Like, User Profile, vendors, infinit loading, languages(AR,EN), dynamic products seo, unit tests",
    link: "https://techshop-commerce.vercel.app",
    code: "https://github.com/DavidMeseha/allInOne-myShop-Front",
    createdAt: "07/01/2024",
    updatedAt: "5/01/2025",
  },

  {
    title: "3D Realtime(Web Socket)",
    technologies: "React.js, Three.js, React Three Fiber, Socket.io, Node.js",
    features:
      "A simple environment you have a character to navigate inside it and you can see other visitors/players",
    code: "https://github.com/DavidMeseha/game-v1",
    link: "https://game-v1-five.vercel.app/",
    createdAt: "01/01/2025",
    updatedAt: "01/01/2025",
  },

  {
    title: "Interactive Service Calender (Client)",
    technologies:
      "react.js with js from scratch and no packages used only tailwind css",
    features:
      "An interactive calendr with the ability to modify appointments with hold and drag and drop",
    link: "https://timeline-calander-system.vercel.app",
    code: false,
    createdAt: "04/01/2023",
    updatedAt: "05/01/2023",
  },

  {
    title: "Survey Creating System (Client)",
    technologies: "React.js project, with tailwindCss",
    features:
      'A Ceate Surrvey system with various questions types "Multi Choice, Checkboxs, text, rate, order/rank"',
    link: "https://campagin-and-survey.vercel.app/create-campaign/survey",
    code: false,
    createdAt: "07/01/2023",
    updatedAt: "08/01/2023",
  },

  {
    title: "Laptop Client-side filtering",
    technologies: "A Next.js, React.js and mongodb project",
    features: "Showing eCommerce sorting, filtering and searching features",
    link: "https://shop-jade-rho.vercel.app",
    code: "https://github.com/DavidMeseha/shop",
    createdAt: "03/01/2023",
    updatedAt: "07/01/2023",
  },

  {
    title: "Auth simple Ask App",
    technologies: "full-stack Next.js, typescript, MongoDB, Next-auth",
    features:
      "Regester/Login/Logout, user auth, Secure Routs, user Role(/admin is confedential)",
    link: "https://ask-psychology.vercel.app",
    code: "https://github.com/DavidMeseha/ask-psychology",
    createdAt: "01/04/2025",
    updatedAt: "04/04/2025",
  },

  {
    title: "Fruitkha Landing Page",
    technologies: "A simple HTML Css showing best practice css with bootstrap",
    features:
      "A Landing page with multible sections, cards and resposive designe",
    link: "https://fruitkha-landing-page.vercel.app",
    code: "https://github.com/DavidMeseha/fruitkha-landing-page",
    createdAt: "02/01/2024",
    updatedAt: "02/01/2024",
  },
];
