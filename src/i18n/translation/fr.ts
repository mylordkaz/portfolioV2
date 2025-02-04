import type { Translation } from "../types";

const fr: Translation = {
  nav: {
    projects: "Projets",
    expertise: "Expertise",
    about: "À propos",
    contact: "Contact",
  },
  hero: {
    title: "Ingénieur Logiciel & Designer Web",
    description:
      "Un artisan numérique qui propose des solutions web haute performance. Basé à Tokyo, au Japon, collaborant harmonieusement à travers les fuseaux horaires mondiaux pour transformer votre vision en réalité.",
  },
  section: {
    title: "Derniers Projets",
  },
  footer: {
    softwareEngineer: "Ingénieur Logiciel",
  },
  projects: {
    title: "Mes Projets",
    subtitle: "Vitrine du Portfolio",
    description:
      "Découvrez mes derniers travaux et projets techniques. Chaque projet représente un défi unique et une solution innovante.",
    napsDescription:
      "Un site web complet de salon de beauté avec blog intégré.",
    cryptrackDescription:
      "Une application desktop MacOS pour suivre votre portefeuille de cryptomonnaies.",
    detailedNapsDescription:
      "Naps est un site web moderne et multilingue de salon de beauté, soigneusement conçu pour un public anglophone et japonais. Le site présente de manière transparente les services du salon, les détails des soins et une section blog organisée pour guider les visiteurs dans leur parcours beauté. Grâce à la fonctionnalité de réservation intégrée, les clients peuvent facilement explorer les services et prendre rendez-vous dans leur langue préférée.",
    technicalNapsDescription:
      "Construit avec SvelteKit et TypeScript, et stylisé avec TailwindCSS, le site dispose d'une internationalisation robuste via Paraglide supportant le contenu en anglais et en japonais. L'architecture comprend le routage côté client et le chargement dynamique du contenu, avec l'intégration de MicroCMS pour la gestion du contenu du blog. Déployé sur Netlify, le site met en œuvre une optimisation SEO complète pour les deux langues, assurant une forte visibilité dans les recherches sur les deux marchés. Le design responsive et l'optimisation des performances créent une expérience utilisateur fluide sur tous les appareils.",
    viewBtn: "Voir détails",
  },
  expertise: {
    title: "Expertise Technique",
    description:
      "Spécialisé dans le développement full-stack avec un fort accent sur la rapidité, l'efficacité et la précision en utilisant des technologies modernes. Passionné par l'optimisation des performances et la création de solutions fiables et évolutives pour améliorer l'expérience utilisateur.",
    categories: {
      frontend: {
        title: "Développement Frontend",
        description:
          "Création d'interfaces rapides et conviviales qui s'adaptent parfaitement à tout type d'appareil. Axé sur des expériences fluides et réactives grâce à des frameworks modernes.",
      },
      backend: {
        title: "Développement Backend",
        description:
          "Création d'applications côté serveur fiables et efficaces, avec une attention particulière à la scalabilité, la gestion des données et une communication fluide avec les systèmes frontend.",
      },
      devops: {
        title: "Développement d'Applications & DevOps",
        description:
          "Création d'applications mobiles et desktop tout en gérant des environnements cloud pour des opérations fiables et efficaces. Axé sur des déploiements fluides, la scalabilité des systèmes et l'optimisation des performances.",
      },
    },
  },
  about: {
    title: "À propos de moi",
    description:
      "Ingénieur logiciel français passionné par la Blockchain et les technologies émergentes. Qu'il s'agisse d'une interface utilisateur élégante ou d'un système backend puissant, je me concentre sur la livraison de solutions efficaces.",
    intro: {
      title: "Qui je suis ?",
      content: `Originaire de France et vivant au Japon, j'ai toujours été curieux et motivé par les défis. Mon parcours m'a conduit de la gestion hôtelière de luxe à travers le monde à une immersion dans le domaine de la technologie.\nQuand je ne code pas, vous me trouverez probablement à bricoler sur ma voiture ou à explorer les magnifiques paysages du Japon.`,
    },
    services: {
      title: "Ce que je propose",
      items: [
        {
          title: "Développement d'applications Web",
          description:
            "Solutions full-stack pour des applications Web réactives et sécurisées avec un design intuitif et esthétique.",
        },
        {
          title: "Développement d'applications mobiles et de bureau",
          description:
            "Création d'applications personnalisées multiplateformes adaptées à vos besoins spécifiques.",
        },
        {
          title: "Performance et optimisation",
          description:
            "Conception de systèmes backend fiables tout en améliorant la vitesse et l'efficacité pour une utilisation fluide.",
        },
      ],
    },
    button: "Contactez-moi!",
  },
  contact: {
    title: "Restons en Contact",
    description:
      "Vous avez un projet en tête ? Envoyez-moi un message ou connectez-vous via les réseaux sociaux.",
    form: {
      name: "Nom",
      email: "Email",
      message: "Message",
      submit: "Envoyer",
    },
    socials: {
      title: "Retrouvez-moi sur",
      description:
        "N'hésitez pas à me contacter sur les réseaux sociaux ou par email.",
    },
  },
};

export default fr;
