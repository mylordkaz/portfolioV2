import type { ImageMetadata } from "astro";
import projectImg from "../assets/project.png";

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
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform",
    image: projectImg,
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://project1.com",
    size: "large",
  },
  {
    id: "2",
    title: "Mobile App",
    description: "iOS and Android application",
    image: projectImg,
    tags: ["React Native", "Firebase"],
    link: "https://project2.com",
    size: "square",
  },
  {
    id: "6",
    title: "AI Task Manager",
    description: "Smart task management app with AI-powered prioritization",
    image: projectImg,
    tags: ["React", "Python", "TensorFlow"],
    link: "https://project2.com",
    size: "square",
  },
  {
    id: "3",
    title: "Real-time Chat App",
    description: "Instant messaging platform with end-to-end encryption",
    image: projectImg,
    tags: ["Vue.js", "Socket.io", "Node.js"],
    link: "https://project3.com",
    size: "large",
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "Dynamic weather visualization with 7-day forecasts",
    image: projectImg,
    tags: ["React", "D3.js", "OpenWeather API"],
    link: "https://project4.com",
    size: "square",
  },
  {
    id: "5",
    title: "Recipe Finder",
    description:
      "Personalized recipe recommendations based on available ingredients",
    image: projectImg,
    tags: ["Svelte", "Firebase", "Spoonacular API"],
    link: "https://project5.com",
    size: "square",
  },
];
