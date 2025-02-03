import type { ImageMetadata } from "astro";
import projectImg from "../assets/project.png";
import naps from "../assets/naps.png";
import cryptrack from "../assets/cryptrackHome.png";

type ProjectSize = "large" | "square";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: ImageMetadata;
  tags: string[];
  link: string;
  gridArea?: string;
  size: ProjectSize;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Naps shaving",
    description: "A full-featured Beauty salon website, with integrated blog.",
    image: naps,
    tags: ["SvelteKit", "TypeScript", "MicroCMS"],
    link: "https://napssv.com",
    size: "large",
  },
  {
    id: "2",
    title: "Cryptrack",
    description: "A MacOs desktop app, Cryptocurrencies portfolio tracker.",
    image: cryptrack,
    tags: ["Golang", "Wails", "React"],
    link: "https://project2.com",
    size: "square",
  },
];
