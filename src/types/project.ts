import type { ImageMetadata } from "astro";
import type { ProjectDescriptionKey } from "../i18n/types";

export interface ProjectModalProps {
  id: string;
  title: string;
  description: string;
  detailedDescription: ProjectDescriptionKey;
  technicalDescription: ProjectDescriptionKey;
  image: ImageMetadata;
  galleryImages?: ImageMetadata[];
  tags: string[];
  link?: string;
}
