import type { ImageMetadata } from "astro";
import type { ExpertiseKey } from "../i18n/types.ts";
import frontendImg from "../assets/frontend.webp";
import backendImg from "../assets/backend.webp";
import devopsImg from "../assets/devops.webp";

export interface ExpertiseCategory {
  id: string;
  image: ImageMetadata;
  skills: string[];
}

export const expertise: Record<ExpertiseKey, ExpertiseCategory> = {
  frontend: {
    id: "frontend",
    image: frontendImg,
    skills: [
      "React",
      "Svelte",
      "TypeScript",
      "Tailwind CSS",
      "Remix",
      "Astro",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  backend: {
    id: "backend",
    image: backendImg,
    skills: [
      "Node.js",
      "Golang",
      "Laravel",
      "PostgreSQL",
      "SQLite",
      "Prisma",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Testing",
    ],
  },
  devops: {
    id: "devops",
    image: devopsImg,
    skills: [
      "Docker",
      "AWS",
      "CI/CD",
      "React Native",
      "Wails",
      "Git",
      "GitHub",
    ],
  },
};
