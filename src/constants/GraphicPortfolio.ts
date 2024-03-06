export interface GraphicProject {
  title: string;
  img: string;
  contentImg: string[];
}

export const graphicProjects: GraphicProject[] = [
  {
    title: "Social media - African Queen",
    img: "/photos/4head.jpg",
    contentImg: ["/photos/4main-a.webp", "/photos/4main-b.webp"],
  },
  {
    title: "Social Media Art Work Vol 1 - Be-Online Agency",
    img: "/photos/2head.jpg",
    contentImg: [
      "/photos/2main-a.jpg",
      "/photos/2main-b.jpg",
      "/photos/2main-c.jpg",
      "/photos/2main-d.jpg",
      "/photos/2main-e.jpg",
    ],
  },
  {
    title: "Chicken Art - Social Media - Hot Chicken",
    img: "/photos/3head.jpg",
    contentImg: [
      "/photos/3main-a.webp",
      "/photos/3main-b.webp",
      "/photos/3main-c.webp",
    ],
  },
  {
    title: "Social Media Art Work Vol 2 - Be-Online Agency",
    img: "/photos/1head.jpg",
    contentImg: [
      "/photos/1main-a.jpg",
      "/photos/1main-b.jpg",
      "/photos/1main-c.jpg",
      "/photos/1main-d.jpg",
      "/photos/1main-e.jpg",
    ],
  },
];
