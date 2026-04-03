import type { Translation } from '../types';

const fr: Translation = {
  nav: {
    projects: 'Projets',
    expertise: 'Expertise',
    about: 'À propos',
  },
  hero: {
    title: 'Ingénieur Logiciel & Designer Web',
    description:
      'Artisan numérique proposant des solutions web haute performance. Des interfaces élégantes aux systèmes robustes — conçus pour durer.',
    eyebrow: 'Disponible · Tokyo, Japon',
    ctaProjects: 'Voir les projets',
    ctaContact: 'Me contacter',
    statProjects: 'PROJETS',
    statStack: 'STACK',
    statStackValue: 'Go · Python · TypeScript',
    statBased: 'BASÉ À',
    statBasedValue: 'Tokyo',
  },
  section: {
    title: 'Dernier Projet',
    viewAll: 'Tous les projets',
  },
  featured: {
    label: 'EN VEDETTE · WEB DESIGN',
    viewProject: 'Voir le projet',
  },
  footer: {
    softwareEngineer: 'Ingénieur Logiciel',
  },
  projects: {
    title: 'Mes Projets',
    subtitle: 'Portfolio',
    eyebrow: 'Portfolio',
    description:
      'Chaque projet représente un défi unique et une solution innovante.',
    viewCta: 'Voir',
    napsDescription:
      'Un site web complet de salon de beauté avec blog intégré.',
    cryptrackDescription:
      'Une application desktop MacOS pour suivre votre portefeuille de cryptomonnaies.',
    moneySwapDescription:
      'Application mobile multiplateforme fournissant le taux de change en temps réel des devises fiduciaires et des cryptomonnaies.',
    siriusGarageDescription:
      'Un renouvellement moderne du site web pour un garage mécanique français, mettant en valeur les services et les informations de contact.',
    kakuregaDescription:
      'Un site web mobile-first avec blog intégré pour un salon de coiffure masculin récemment ouvert à Tokyo.',
    detailedNapsDescription:
      'Naps est un site web moderne et multilingue de salon de beauté, soigneusement conçu pour un public anglophone et japonais. Le site présente de manière transparente les services du salon, les détails des soins et une section blog organisée pour guider les visiteurs dans leur parcours beauté. Grâce à la fonctionnalité de réservation intégrée, les clients peuvent facilement explorer les services et prendre rendez-vous dans leur langue préférée.',
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
    detailedSiriusGarageDescription:
      "SiriusGarage est une refonte complète du site web pour un atelier de réparation automobile professionnel en France. Le site sert de vitrine numérique, présentant élégamment leurs services mécaniques spécialisés, leurs capacités de réparation et leur expertise automobile. Avec une interface simplifiée, les clients potentiels peuvent facilement explorer les offres de services et accéder aux informations de contact. Le design met l'accent sur la confiance et le professionnalisme tout en conservant des éléments visuels qui reflètent la nature pratique du travail automobile.",
    technicalSiriusGarageDescription:
      "Construit avec SvelteKit et TypeScript, le site web SiriusGarage offre d'excellentes performances et une expérience utilisateur optimale. L'architecture implémente une optimisation SEO avancée, incluant une structure HTML sémantique, des données structurées pour entreprise locale, et des métadonnées optimisées pour la visibilité sur les moteurs de recherche. Le design responsive a été élaboré selon une approche mobile-first avec des points de rupture personnalisés pour un affichage parfait sur tous les formats d'écran. Déployé sur Cloudflare, le site bénéficie d'une distribution CDN mondiale, assurant des temps de chargement rapides et une haute disponibilité pour les visiteurs de toute localisation.",
    detailedKakuregaDescription:
      'Kakurega est un site web moderne mobile-first conçu pour un salon de coiffure masculin récemment ouvert à Tokyo, spécialisé dans les services de coiffure traditionnels et contemporains pour hommes. Le site met en valeur l\'atmosphère unique du salon, ses services et ses coiffeurs expérimentés, tout en proposant un blog intégré pour partager des conseils de coiffure, les tendances stylistiques et les actualités du salon. Axé sur le marché tokyoïte, le site web souligne l\'engagement du salon envers un savoir-faire de qualité et la création d\'un espace confortable où les hommes peuvent se détendre et profiter de services de coiffure professionnels.',
    technicalKakuregaDescription:
      'Développé avec SvelteKit et TypeScript pour des performances et une maintenabilité optimales, le site utilise TailwindCSS pour un design responsive mobile-first garantissant un affichage parfait sur tous les appareils. L\'architecture intègre MicroCMS comme système de gestion de contenu headless, permettant une création et gestion facile du contenu de blog tout en maintenant des vitesses de chargement rapides. Le site implémente une optimisation SEO complète avec des données structurées pour la visibilité des entreprises locales et des métadonnées optimisées pour les recherches basées à Tokyo. L\'approche mobile-first privilégie les utilisateurs de smartphones qui constituent la majorité du public cible, tandis que le design épuré et moderne reflète le mélange d\'esthétique japonaise traditionnelle et de style contemporain du salon.',
    viewBtn: 'Voir détails',
    modal: {
      about: 'À propos du projet',
      technical: 'Aperçu technique',
      visitbtn: 'Visiter le site',
    },
  },
  expertise: {
    title: 'Ce que je construis',
    eyebrow: 'Services',
    description:
      'Solutions digitales de bout en bout — du concept au déploiement.',
    categories: {
      frontend: {
        title: 'Développement Frontend',
        description:
          "Création d'interfaces rapides et conviviales qui s'adaptent parfaitement à tout type d'appareil. Axé sur des expériences fluides et réactives grâce à des frameworks modernes.",
      },
      backend: {
        title: 'Développement Backend',
        description:
          "Création d'applications côté serveur fiables et efficaces, avec une attention particulière à la scalabilité, la gestion des données et une communication fluide avec les systèmes frontend.",
      },
      devops: {
        title: "Développement d'Applications & DevOps",
        description:
          "Création d'applications mobiles et desktop tout en gérant des environnements cloud pour des opérations fiables et efficaces. Axé sur des déploiements fluides, la scalabilité des systèmes et l'optimisation des performances.",
      },
    },
    offers: [
      {
        title: 'Systemes Backend & Outils Internes',
        description:
          "Les systemes sur lesquels reposent les entreprises — gestion des stocks, outils employes et automatisation des processus.",
        bullets: [
          'Systemes de gestion de distribution & inventaire',
          'Gestion des employes & tableaux de bord internes',
          "Conception d'API, pipelines de donnees & logique metier",
        ],
      },
      {
        title: 'Applications Mobiles',
        description:
          "Applications multiplateformes qui resolvent de vrais problemes — assistants IA, outils financiers ou utilitaires terrain.",
        bullets: [
          'Applications assistant personnel avec IA',
          'Suivi de portefeuille crypto & taux de change',
          'Suivi GPS & outils de geolocalisation',
        ],
      },
      {
        title: 'Solutions Web & Frontend',
        description:
          "Sites web et applications web responsives — propres, rapides, concus pour de vrais utilisateurs sur tout appareil.",
        bullets: [
          'Sites vitrine & plateformes client',
          "Tableaux de bord d'administration & gestion de contenu",
          'Optimisation des performances & deploiement',
        ],
      },
    ],
  },
  about: {
    eyebrow: 'À propos',
    heading: 'Ingénieur français,\npassionné basé à Tokyo.',
    bio: [
      "Mon travail tourne autour des systemes backend, des applications mobiles et des outils internes — des plateformes de gestion de distribution aux assistants IA en passant par les trackers crypto. Je tiens a construire du logiciel qui fonctionne bien et qui dure.",
      "Originaire de France, base au Japon. J'aime apprendre de nouveaux outils et m'adapter aux besoins de chaque projet. S'il y a quelque chose a construire, je m'en charge.",
      "En dehors du travail, je profite du sport automobile ou je voyage a travers le Japon, a la decouverte de ses magnifiques paysages.",
    ],
    facts: [
      { label: 'Localisation', value: 'Tokyo, Japon' },
      { label: 'Spécialité', value: 'Backend · Mobile · IA' },
      { label: 'Langues', value: 'FR · EN · JP' },
      { label: 'Intérêts', value: 'Sport auto · Tech · Voyage' },
    ],
    contact: {
      eyebrow: 'Contact',
      title: 'Un projet en tête ?',
      description: "N'hésitez pas à me contacter via les réseaux sociaux ou à m'envoyer un message directement.",
      socialLabel: 'RETROUVEZ-MOI SUR',
      formLabel: 'OU ENVOYEZ UN MESSAGE',
      form: {
        name: 'NOM',
        email: 'EMAIL',
        message: 'MESSAGE',
        submit: 'Envoyer',
        success: 'Message envoyé avec succès ! Je vous répondrai bientôt.',
        error: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
        sending: 'Envoi en cours...',
      },
    },
  },
};

export default fr;
