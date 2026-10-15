export type Locale = "en" | "ja" | "fr";
export type Page = "home" | "projects" | "expertise" | "about";

interface Metadata {
  title: string;
  description: string;
  imageAlt: string;
}

export const seo: Record<Locale, Record<Page, Metadata>> = {
  en: {
    home: { title: "Kevin Tim — Software Engineer in Tokyo | Backend & Mobile", description: "French software engineer based in Tokyo, building backend systems, mobile apps and websites with Go, Python and TypeScript. Explore my work and get in touch.", imageAlt: "Kevin Tim — Software engineer in Tokyo. Backend systems, mobile apps and web development." },
    projects: { title: "Software & Mobile App Projects — Kevin Tim", description: "Explore Kevin Tim’s software projects: GPS lap timing with Trakio, AI travel planning with Voy, Cryptrack, and bilingual business websites built in Japan.", imageAlt: "Kevin Tim’s projects — Trakio, Voy Travel, Cryptrack and business websites." },
    expertise: { title: "Backend, Mobile & Web Development — Kevin Tim, Tokyo", description: "Backend systems, internal tools, cross-platform mobile apps and responsive websites. Discover the software development services I offer from Tokyo, Japan.", imageAlt: "Kevin Tim’s expertise — Backend systems, mobile applications and web development." },
    about: { title: "About & Contact — Kevin Tim, Software Engineer in Tokyo", description: "Meet Kevin Tim, a French software engineer based in Tokyo and member of the 508.dev co-op. Learn about my background and contact me about your project.", imageAlt: "About Kevin Tim — French software engineer based in Tokyo, Japan." },
  },
  ja: {
    home: { title: "Kevin Tim — 東京のソフトウェアエンジニア | バックエンド・アプリ開発", description: "東京を拠点に活動するフランス出身のソフトウェアエンジニア。Go・Python・TypeScriptを使ったバックエンド、モバイルアプリ、Webサイトの開発実績をご紹介します。", imageAlt: "Kevin Tim — 東京のソフトウェアエンジニア。バックエンド・モバイルアプリ・Web開発。" },
    projects: { title: "アプリ・Web開発の実績 — Kevin Tim", description: "GPSラップ計測アプリTrakio、AI旅行アシスタントVoy、暗号資産管理アプリCryptrack、日英対応のビジネスサイトなど、Kevin Timの開発実績をご覧ください。", imageAlt: "Kevin Timの開発実績 — Trakio、Voy Travel、Cryptrack、ビジネスサイト。" },
    expertise: { title: "バックエンド・モバイルアプリ・Web開発 — Kevin Tim", description: "業務システム・社内ツール、クロスプラットフォームのモバイルアプリ、レスポンシブWebサイト。東京を拠点に提供するソフトウェア開発サービスをご紹介します。", imageAlt: "Kevin Timのサービス — バックエンド・モバイルアプリ・Web開発。" },
    about: { title: "自己紹介・お問い合わせ — Kevin Tim | 東京のエンジニア", description: "フランス出身、東京在住のソフトウェアエンジニアKevin Tim。508.devのメンバーとしても活動中。経歴・専門分野のご紹介と、開発のご相談はこちらから。", imageAlt: "Kevin Timについて — フランス出身、東京を拠点に活動するソフトウェアエンジニア。" },
  },
  fr: {
    home: { title: "Kevin Tim — Ingénieur logiciel à Tokyo | Backend & Mobile", description: "Ingénieur logiciel français basé à Tokyo. Je développe des systèmes backend, applications mobiles et sites web avec Go, Python et TypeScript. Découvrez mes projets.", imageAlt: "Kevin Tim — Ingénieur logiciel à Tokyo. Systèmes backend, applications mobiles et développement web." },
    projects: { title: "Projets web et applications mobiles — Kevin Tim", description: "Découvrez mes réalisations : chronométrage GPS avec Trakio, voyages assistés par IA avec Voy, Cryptrack et sites professionnels bilingues au Japon.", imageAlt: "Les projets de Kevin Tim — Trakio, Voy Travel, Cryptrack et sites professionnels." },
    expertise: { title: "Développement Backend, Mobile & Web — Kevin Tim, Tokyo", description: "Systèmes backend, outils internes, applications mobiles multiplateformes et sites web. Découvrez mes services de développement logiciel depuis Tokyo, au Japon.", imageAlt: "Les services de Kevin Tim — Systèmes backend, applications mobiles et développement web." },
    about: { title: "À propos et contact — Kevin Tim, ingénieur à Tokyo", description: "Ingénieur logiciel français installé à Tokyo et membre de la coopérative 508.dev. Découvrez mon parcours et contactez-moi pour discuter de votre projet.", imageAlt: "À propos de Kevin Tim — Ingénieur logiciel français basé à Tokyo, au Japon." },
  },
};

export const ui: Record<Locale, { skip: string; theme: string; menu: string; close: string; navigation: string; languages: string }> = {
  en: { skip: "Skip to content", theme: "Toggle color theme", menu: "Toggle navigation menu", close: "Close project details", navigation: "Main navigation", languages: "Language" },
  ja: { skip: "本文へ移動", theme: "配色テーマを切り替え", menu: "ナビゲーションメニューを切り替え", close: "プロジェクト詳細を閉じる", navigation: "メインナビゲーション", languages: "言語" },
  fr: { skip: "Aller au contenu", theme: "Changer le thème", menu: "Ouvrir ou fermer le menu", close: "Fermer les détails du projet", navigation: "Navigation principale", languages: "Langue" },
};
