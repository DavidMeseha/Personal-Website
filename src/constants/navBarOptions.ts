export type NavOption = {
  name: string;
  to: string;
};

const navBarOptions: NavOption[] = [
  { name: "intro", to: "/" },
  { name: "skills", to: "/skills" },
  { name: "dev-portfolio", to: "/dev-portfolio" },
  { name: "graphic-portfolio", to: "/graphic-portfolio" },
  { name: "interested", to: "/interested" },
];

export default navBarOptions;
