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
    coopCta: 'Vous avez un grand projet ?',
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
      'Site web bilingue pour salon de beauté avec blog et réservation intégrés.',
    cryptrackDescription:
      'Une application mobile pour suivre votre portefeuille de cryptomonnaies — PnL en temps réel, graphiques et support hors ligne complet.',
    moneySwapDescription:
      'Application mobile multiplateforme pour les taux de change en temps réel entre devises et cryptomonnaies.',
    siriusGarageDescription:
      'Refonte de site web pour un garage automobile professionnel en France.',
    kakuregaDescription:
      'Site web mobile-first avec blog intégré pour un salon de coiffure masculin à Tokyo.',
    detailedNapsDescription:
      'Naps est un site web moderne et multilingue pour un salon de beauté, présentant les services, les soins et un blog sélectionné. La réservation intégrée permet aux clients de prendre rendez-vous dans la langue de leur choix.',
    technicalNapsDescription:
      "Développé avec SvelteKit, TypeScript et TailwindCSS, avec l'internationalisation gérée par Paraglide pour les contenus en anglais et en japonais. MicroCMS gère le blog, et le site est déployé sur Cloudflare avec une optimisation SEO pour les deux marchés.",
    detailedCryptDescription:
      "Cryptrack est une application mobile pour suivre votre portefeuille de cryptomonnaies sur plusieurs wallets et exchanges. Enregistrez manuellement vos transactions d'achat/vente, suivez votre PnL en temps réel et visualisez vos performances via des graphiques — dans la devise de votre choix. Sécurisée par authentification biométrique, l'application fonctionne entièrement hors ligne et prend en charge plusieurs portefeuilles avec un suivi du prix de revient par actif.",
    technicalCryptDescription:
      "Une application mobile React Native (Expo) offline-first, adossée à un microservice Go. L'application stocke toutes les données de portefeuille localement dans SQLite et calcule les métriques via un suivi FIFO des lots en TypeScript. Une API Go légère agrège les prix en direct depuis CoinGecko/CoinMarketCap et les taux de change, en les servant avec un cache multi-niveaux en mémoire et une déduplication singleflight. L'état est géré via des React Context providers pour le portefeuille, la devise, le thème et l'authentification biométrique.",
    detailedMoneySwapDescription:
      "MoneySwap est une application de conversion de devises qui fait le lien entre monnaies fiduciaires et cryptomonnaies. Elle fournit des taux en temps réel pour les principales devises et un large éventail de cryptos, permettant de suivre plusieurs paires simultanément sur iOS et Android.",
    technicalMoneySwapDescription:
      "Développée avec React Native et TypeScript, adossée à une API Golang utilisant des goroutines pour le traitement concurrent de plusieurs flux de taux de change. Intègre des API financières pour les données fiat et crypto, avec des mises à jour en temps réel via WebSocket et une couche de cache backend.",
    detailedSiriusGarageDescription:
      "SiriusGarage est la refonte du site web d'un atelier de réparation automobile professionnel en France. Le site met en valeur leurs services mécaniques et leur expertise, avec un design axé sur la confiance et le professionnalisme.",
    technicalSiriusGarageDescription:
      "Développé avec SvelteKit et TypeScript, avec un design responsive mobile-first et une optimisation SEO local incluant données structurées et métadonnées optimisées. Déployé sur Cloudflare.",
    detailedKakuregaDescription:
      "Kakurega est un site web mobile-first pour un salon de coiffure masculin à Tokyo. Le site présente l'atmosphère du salon, ses services et un blog intégré pour les conseils de coiffure et les tendances — avec une esthétique épurée mêlant sensibilité japonaise traditionnelle et style contemporain.",
    technicalKakuregaDescription:
      "Développé avec SvelteKit et TypeScript, stylisé avec TailwindCSS pour une expérience mobile-first responsive. MicroCMS alimente le blog headless, simplifiant les mises à jour de contenu sans sacrifier les performances. Le site intègre des données structurées et des métadonnées optimisées pour le référencement local à Tokyo.",
    voyDescription:
      'Un assistant de voyage IA qui transforme l\'inspiration des réseaux sociaux en voyages complets et réservables.',
    detailedVoyDescription:
      'Voy fait le lien entre la découverte de voyages et la réservation concrète. Les utilisateurs partagent leur inspiration — posts Instagram, vidéos TikTok, captures d\'écran — et un assistant IA prend le relais : comprendre le contexte par conversation naturelle, rechercher des hôtels, vérifier les disponibilités et guider jusqu\'à la confirmation. Les conversations sont persistantes et reprennent là où elles s\'étaient arrêtées, pensées comme un compagnon de voyage plutôt qu\'un moteur de recherche.',
    technicalVoyDescription:
      'Un monorepo polyglotte de production (Turborepo/pnpm) avec une app mobile React Native/Expo, une API backend Next.js, un runtime d\'assistant IA en Python et des workers — partageant une base PostgreSQL et une couche Redis commune. L\'assistant IA repose sur une architecture graphe avec état persistant et une stratégie dual-LLM selon les types de requêtes. La sécurité de bout en bout est assurée via tRPC. L\'infrastructure inclut le tracing distribué, l\'observabilité LLM, le suivi d\'erreurs et un CI/CD iOS automatisé.',
    trakioDescription:
      'Une application mobile de chronométrage pour les journées circuit — enregistrement GPS, détection automatique des tours et secteurs, analyse des performances.',
    detailedTrakioDescription:
      'Trakio est une application iOS pour les pilotes de journées circuit qui souhaitent enregistrer et analyser leurs sessions simplement. Elle utilise le GPS pour suivre les runs, détecte automatiquement les tours et secteurs, stocke l\'historique localement et présente des insights post-session : meilleur tour, performances par secteur et carte de session. Elle inclut également des fonctions sociales comme le partage en Story Instagram et un système de classement.',
    technicalTrakioDescription:
      'Une app iOS React Native/Expo combinant télémétrie GPS, stockage SQLite local, métadonnées de circuits avec lignes de chronométrage, détection automatique des tours et secteurs, et analyses post-session. Les points GPS entrants passent par un filtre — les lectures peu précises sont écartées et la vitesse est recalculée depuis la distance entre les points pour corriger les sauts GPS. Les sessions sont gérées comme une machine à états pour que l\'interface reflète toujours l\'état actuel sans attendre les écritures en base. Un Cloudflare Worker avec D1 alimente le backend du classement.',
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
      "Je co-construis activement 508.dev — une coopérative de développeurs qui livre des produits digitaux pour des clients à travers le monde.",
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
