import type { ImageMetadata } from "astro";
import type { ProjectDescriptionKey } from "../i18n/types";

import naps from "../assets/naps/naps.webp";
import cryptrack from "../assets/cryptrack/cryptrack.webp";

const napsGalleryImages = import.meta.glob<ImageMetadata>(
  "../assets/naps/gallery/*.{png,jpg,jpeg,webp}",
  {
    import: "default",
    eager: true,
  },
);
const cryptGalleryImages = import.meta.glob<ImageMetadata>(
  "../assets/cryptrack/gallery/*.{png,jpg,jpeg,webp}",
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
    detailedDescription: "detailedCryptDescription",
    technicalDescription: "technicalCryptDescription",
    image: cryptrack,
    galleryImages: Object.values(cryptGalleryImages),
    tags: ["Golang", "Wails", "React"],
    link: "",
  },
];
