import type { ImageMetadata } from "astro";
import type { ProjectDescriptionKey } from "../i18n/types";

import naps from "../assets/naps.png";
import cryptrack from "../assets/cryptrackHome.png";

const napsGalleryImages = import.meta.glob<ImageMetadata>(
  "../assets/naps/*.{png,jpg,jpeg,webp}",
  {
    import: "default",
    eager: true,
  },
);

export interface Project {
  id: string;
  title: string;
  descriptionKey: ProjectDescriptionKey;
  detailedDescription: ProjectDescriptionKey;
  technicalDescription: ProjectDescriptionKey;
  image: ImageMetadata;
  galleryImages?: ImageMetadata[];
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Naps shaving",
    descriptionKey: "napsDescription",
    detailedDescription: "detailedNapsDescription",
    technicalDescription: "technicalNapsDescription",
    image: naps,
    galleryImages: Object.values(napsGalleryImages),
    tags: ["SvelteKit", "TypeScript", "MicroCMS"],
    link: "https://napsv.com/",
  },
  {
    id: "2",
    title: "Cryptrack",
    descriptionKey: "cryptrackDescription",
    detailedDescription: "",
    technicalDescription: "",
    image: cryptrack,
    galleryImages: [],
    tags: ["Golang", "Wails", "React"],
    link: "",
  },
];
