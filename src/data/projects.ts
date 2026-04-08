import type { ImageMetadata } from "astro";
import type { ProjectDescriptionKey } from "../i18n/types";

import naps from "../assets/naps/naps.webp";
import cryptrack from "../assets/cryptrack/cryptrack.webp";
import moneySwap from "../assets/moneySwap/moneySwap.webp";
import sirius from "../assets/siriusGarage/sirius.webp";
import kakurega from "../assets/kakurega/kakurega.webp";
import voyTravel from "../assets/voyTravel/voyTravel.webp";
import trakio from "../assets/trakio/trakio.webp";

export interface Project {
  id: string;
  title: string;
  descriptionKey: ProjectDescriptionKey;
  detailedDescription: ProjectDescriptionKey;
  technicalDescription: ProjectDescriptionKey;
  image: ImageMetadata;
  tags: string[];
  link?: string;
  imageContain?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "MoneySwap",
    descriptionKey: "moneySwapDescription",
    detailedDescription: "detailedMoneySwapDescription",
    technicalDescription: "technicalMoneySwapDescription",
    image: moneySwap,

    tags: ["React-native", "TypeScript", "Golang"],
    link: "",
  },
  {
    id: "2",
    title: "siriusGarage",
    descriptionKey: "siriusGarageDescription",
    detailedDescription: "detailedSiriusGarageDescription",
    technicalDescription: "technicalSiriusGarageDescription",
    image: sirius,

    tags: ["SvelteKit", "TypeScript", "Cloudflare"],
    link: "",
  },
  {
    id: "3",
    title: "Kakurega",
    descriptionKey: "kakuregaDescription",
    detailedDescription: "detailedKakuregaDescription",
    technicalDescription: "technicalKakuregaDescription",
    image: kakurega,

    tags: ["SvelteKit", "MicroCMS", "TailwindCSS"],
    link: "https://kakurega-men.com",
  },
  {
    id: "4",
    title: "Naps shaving",
    descriptionKey: "napsDescription",
    detailedDescription: "detailedNapsDescription",
    technicalDescription: "technicalNapsDescription",
    image: naps,

    tags: ["SvelteKit", "TypeScript", "MicroCMS"],
    link: "https://napsv.com/",
  },
  {
    id: "5",
    title: "Cryptrack",
    descriptionKey: "cryptrackDescription",
    detailedDescription: "detailedCryptDescription",
    technicalDescription: "technicalCryptDescription",
    image: cryptrack,
    tags: ["React Native", "Expo", "Go"],
    link: "https://apps.apple.com/app/cryptrack-tracker/id6759000890",
    imageContain: true,
  },
  {
    id: "6",
    title: "Voy Travel",
    descriptionKey: "voyDescription",
    detailedDescription: "detailedVoyDescription",
    technicalDescription: "technicalVoyDescription",
    image: voyTravel,
    tags: ["React Native", "Next.js", "Python"],
    link: "",
  },
  {
    id: "7",
    title: "Trakio",
    descriptionKey: "trakioDescription",
    detailedDescription: "detailedTrakioDescription",
    technicalDescription: "technicalTrakioDescription",
    image: trakio,
    tags: ["React Native", "Expo", "Cloudflare"],
    link: "https://apps.apple.com/app/trakio/id6760278416",
  },
];
