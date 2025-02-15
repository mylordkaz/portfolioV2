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
    moneySwapDescription:
      "Application mobile multiplateforme fournissant le taux de change en temps réel des devises fiduciaires et des cryptomonnaies.",
    detailedNapsDescription:
      "Naps est un site web moderne et multilingue de salon de beauté, soigneusement conçu pour un public anglophone et japonais. Le site présente de manière transparente les services du salon, les détails des soins et une section blog organisée pour guider les visiteurs dans leur parcours beauté. Grâce à la fonctionnalité de réservation intégrée, les clients peuvent facilement explorer les services et prendre rendez-vous dans leur langue préférée.",
    technicalNapsDescription:
      "Construit avec SvelteKit et TypeScript, et stylisé avec TailwindCSS, le site dispose d'une internationalisation robuste via Paraglide supportant le contenu en anglais et en japonais. L'architecture comprend le routage côté client et le chargement dynamique du contenu, avec l'intégration de MicroCMS pour la gestion du contenu du blog. Déployé sur Netlify, le site met en œuvre une optimisation SEO complète pour les deux langues, assurant une forte visibilité dans les recherches sur les deux marchés. Le design responsive et l'optimisation des performances créent une expérience utilisateur fluide sur tous les appareils.",
    detailedCryptDescription:
      "Cryptrack est une application native pour macOS permettant aux utilisateurs de suivre leurs investissements en cryptomonnaies. Elle propose des mises à jour de prix en temps réel, une gestion de portefeuille avec suivi des transactions d'achat/vente, des analyses de performance et une interface moderne et épurée avec prise en charge des modes clair et sombre. Les utilisateurs peuvent gérer en toute sécurité plusieurs cryptomonnaies et analyser leurs gains et pertes sur le long terme. ",
    technicalCryptDescription:
      "Développée avec Wails v2.9 (Go/React), cette application de bureau combine un backend en Go pour la logique métier et la gestion des données, et un frontend en React TypeScript utilisant Tailwind CSS pour le design. L'application intègre l'API de CoinMarketCap pour fournir des données cryptographiques en temps réel, utilise SQLite avec GORM pour le stockage persistant, implémente une authentification sécurisée avec hachage bcrypt et exploite le trousseau macOS pour la gestion des sessions. L'architecture suit un modèle basé sur les services, avec une séparation claire entre l'interface utilisateur, la logique métier et les couches de données. ",
    detailedMoneySwapDescription:
      "MoneySwap est une application complète de conversion de devises qui comble le fossé entre les monnaies fiduciaires traditionnelles et les cryptomonnaies. L'application fournit des taux de change en temps réel pour les principales devises fiduciaires ainsi qu'un large éventail de cryptomonnaies, permettant aux utilisateurs de prendre des décisions éclairées concernant leurs échanges de devises. Grâce à une interface intuitive, les utilisateurs peuvent suivre simultanément plusieurs paires de devises. L'application met l'accent sur la fourniture de taux de conversion précis et actualisés, tout en assurant une expérience utilisateur fluide et réactive sur les plateformes iOS et Android.",
    technicalMoneySwapDescription:
      "Développée avec React Native pour une compatibilité multiplateforme, l'application adopte une architecture propre et basée sur des composants, avec TypeScript pour une meilleure sécurité des types. Le backend est alimenté par un service API robuste en Golang, exploitant les goroutines pour un traitement concurrent efficace de plusieurs flux de taux de change. Le système s'intègre à diverses API financières pour les taux des devises fiduciaires et les données des cryptomonnaies, mettant en œuvre des connexions WebSocket pour des mises à jour de prix en temps réel. Une couche de mise en cache est implémentée côté backend, tandis que l'application mobile utilise le stockage local pour assurer une fonctionnalité hors ligne et la gestion des préférences utilisateur. L'application suit les principes de l'architecture propre, avec une séparation claire entre l'interface utilisateur, la logique métier et les couches de données, garantissant ainsi maintenabilité et évolutivité. Une version web de l'application est également en cours de développement.",
    viewBtn: "Voir détails",
    modal: {
      about: "À propos du projet",
      technical: "Aperçu technique",
      gallery: "Galerie",
      visitbtn: "Visiter le site",
    },
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
      success: "Message envoyé avec succès ! Nous vous répondrons bientôt.",
      error:
        "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
      sending: "Envoi en cours...",
    },
    socials: {
      title: "Retrouvez-moi sur",
      description:
        "N'hésitez pas à me contacter sur les réseaux sociaux ou par email.",
    },
  },
};

export default fr;
