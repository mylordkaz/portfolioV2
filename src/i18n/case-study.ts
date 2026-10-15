import type { Locale } from "../data/seo";

interface CaseStudyCopy {
  caseStudy: string;
  allProjects: string;
  overview: string;
  engineering: string;
  project: string;
  howItWorks: string;
  nextProject: string;
  appStore: string;
  website: string;
  contact: string;
  contactDescription: string;
  category: Record<"mobile" | "website" | "ai", string>;
}

export const caseStudyCopy: Record<Locale, CaseStudyCopy> = {
  en: {
    caseStudy: "Project case study", allProjects: "All projects",
    overview: "Overview", engineering: "Engineering", project: "The project",
    howItWorks: "How it works", nextProject: "Next project",
    appStore: "View on the App Store", website: "Visit website",
    contact: "Get in touch", contactDescription: "Let’s talk about what you’re building.",
    category: { mobile: "Mobile application", website: "Business website", ai: "AI travel assistant" },
  },
  ja: {
    caseStudy: "開発事例", allProjects: "すべてのプロジェクト",
    overview: "概要", engineering: "技術構成", project: "プロジェクトについて",
    howItWorks: "仕組みと実装", nextProject: "次のプロジェクト",
    appStore: "App Storeで見る", website: "サイトを見る",
    contact: "お問い合わせ", contactDescription: "開発したいサービスやアプリについて、お気軽にご相談ください。",
    category: { mobile: "モバイルアプリ", website: "ビジネスサイト", ai: "AI旅行アシスタント" },
  },
  fr: {
    caseStudy: "Étude de cas", allProjects: "Tous les projets",
    overview: "Présentation", engineering: "Technique", project: "Le projet",
    howItWorks: "Conception et réalisation", nextProject: "Projet suivant",
    appStore: "Voir sur l’App Store", website: "Visiter le site",
    contact: "Me contacter", contactDescription: "Parlons de ce que vous souhaitez créer.",
    category: { mobile: "Application mobile", website: "Site professionnel", ai: "Assistant de voyage IA" },
  },
};
