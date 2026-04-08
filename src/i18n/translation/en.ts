import type { Translation } from '../types';

const en: Translation = {
  nav: {
    projects: 'Projects',
    expertise: 'Expertise',
    about: 'About',
  },
  hero: {
    title: 'Software Engineer & Web Designer',
    description:
      'Digital craftsman delivering high-performance web solutions. From sleek interfaces to powerful systems — built to last.',
    eyebrow: 'Available for work · Tokyo, Japan',
    ctaProjects: 'View Projects',
    ctaContact: 'Get in touch',
    statProjects: 'PROJECTS',
    statStack: 'STACK',
    statStackValue: 'Go · Python · TypeScript',
    statBased: 'BASED IN',
    statBasedValue: 'Tokyo',
  },
  section: {
    title: 'Latest Project',
    viewAll: 'All projects',
    coopCta: 'Building something big?',
  },
  featured: {
    label: 'FEATURED · WEB DESIGN',
    viewProject: 'View project',
  },
  footer: {
    softwareEngineer: 'Software Engineer',
  },
  projects: {
    title: 'My Projects',
    subtitle: 'Portfolio Showcase',
    eyebrow: 'Portfolio',
    description:
      'Each project represents a unique challenge and an innovative solution.',
    viewCta: 'View',
    napsDescription:
      'Bilingual beauty salon website with integrated blog and booking.',
    cryptrackDescription:
      'A mobile app to track your cryptocurrency portfolio — real-time PnL, charts, and full offline support.',
    moneySwapDescription:
      'Cross-platform mobile app for real-time fiat and crypto exchange rates.',
    siriusGarageDescription:
      'Website redesign for a French automotive repair shop.',
    kakuregaDescription:
      'Mobile-first website with integrated blog for a men\'s barber salon in Tokyo.',
    detailedNapsDescription:
      'Naps is a modern multilingual beauty salon website presenting services, treatments, and a curated blog. Integrated booking lets customers make appointments in their preferred language.',
    technicalNapsDescription:
      'Built with SvelteKit, TypeScript, and TailwindCSS, with internationalization handled by Paraglide for English and Japanese content. MicroCMS manages the blog, and the site is deployed on Cloudflare with SEO optimization for both markets.',
    detailedCryptDescription:
      'Cryptrack is a mobile app to track your cryptocurrency portfolio across multiple wallets and exchanges. Manually log buy/sell transactions, monitor real-time PnL, and visualize performance through charts — all in your preferred currency. Secured with biometric authentication, the app works fully offline and supports multiple portfolios with per-asset cost basis tracking.',
    technicalCryptDescription:
      'An offline-first React Native (Expo) mobile app backed by a Go microservice. The app stores all portfolio data locally in SQLite and computes metrics via FIFO lot tracking in TypeScript. A lightweight Go API aggregates live prices from CoinGecko/CoinMarketCap and FX rates, serving them with multi-tier in-memory caching and singleflight deduplication. State is managed through React Context providers for portfolio, currency, theme, and biometric auth.',
    detailedMoneySwapDescription:
      'MoneySwap is a currency conversion app bridging fiat and crypto. It delivers real-time exchange rates for major currencies and a wide range of cryptocurrencies, letting users track multiple pairs simultaneously across iOS and Android.',
    technicalMoneySwapDescription:
      'Built with React Native and TypeScript, backed by a Golang API using goroutines for concurrent processing of multiple exchange rate feeds. Integrates financial APIs for fiat and crypto data with WebSocket-based real-time updates and a backend caching layer.',
    detailedSiriusGarageDescription:
      'SiriusGarage is a website redesign for a professional automotive repair shop in France. The site showcases their mechanical services and expertise, with a design that emphasizes trust and professionalism.',
    technicalSiriusGarageDescription:
      'Built with SvelteKit and TypeScript, with a mobile-first responsive design and local business SEO optimization including structured data and optimized metadata. Deployed on Cloudflare.',
    detailedKakuregaDescription:
      "Kakurega is a mobile-first website for a men's barber salon in Tokyo. The site presents the salon's atmosphere, services, and an integrated blog for grooming tips and style updates — designed with a clean aesthetic that blends traditional Japanese sensibility with contemporary styling.",
    technicalKakuregaDescription:
      "Built with SvelteKit and TypeScript, styled with TailwindCSS for a responsive mobile-first experience. MicroCMS powers the headless blog, keeping content updates simple without sacrificing performance. The site includes structured data and optimized metadata for local SEO visibility in Tokyo.",
    voyDescription:
      'An AI-powered travel assistant that turns social media inspiration into complete, bookable trip plans.',
    detailedVoyDescription:
      'Voy bridges the gap between casual travel discovery and actual bookings. Users share inspiration — Instagram posts, TikTok videos, screenshots — and an AI assistant handles the rest: understanding context through natural conversation, searching hotels, checking availability, and guiding users through booking confirmation. Conversations are persistent and resumable, designed to feel less like a search engine and more like a knowledgeable travel companion.',
    technicalVoyDescription:
      'A production polyglot monorepo (Turborepo/pnpm) with a React Native/Expo mobile app, a Next.js backend API, a Python AI assistant runtime, and background workers — all sharing a common PostgreSQL database and Redis layer. The AI assistant runs on a stateful graph architecture with persistent conversation state and a dual-LLM strategy for different query types. End-to-end type safety is enforced via tRPC. Infrastructure includes distributed tracing, LLM observability, error tracking, and automated iOS CI/CD.',
    trakioDescription:
      'A mobile lap-timing app for track days that records GPS sessions, detects laps and sectors automatically, and helps drivers review their performance.',
    detailedTrakioDescription:
      'Trakio is an iOS app built for track-day drivers who want a simple way to record and analyze their sessions. It uses GPS to track runs, automatically detects laps and sectors, stores session history locally, and presents post-session insights like best lap, sector performance, and session maps. It also includes social features such as Instagram Story sharing and an early leaderboard system.',
    technicalTrakioDescription:
      'A React Native/Expo iOS app combining GPS-based telemetry, local SQLite storage, seeded circuit metadata with timing lines, automatic lap and sector detection, and post-session analytics. Incoming GPS points go through a filter — low accuracy readings are dropped and speed is re-derived from distance between points as a sanity check against GPS jumps. Sessions are managed as a state machine so the UI always reflects the latest state without waiting on database writes. A Cloudflare Worker with D1 powers the leaderboard backend.',
    viewBtn: 'View Details',
    modal: {
      about: 'About the Project',
      technical: 'Technical Overview',
      visitbtn: 'Visit Website',
    },
  },

  expertise: {
    title: 'What I Build',
    eyebrow: 'Services',
    description:
      'End-to-end digital solutions — from concept to deployment.',
    categories: {
      frontend: {
        title: 'Frontend Development',
        description:
          'Building fast and user-friendly interfaces that look great on any device. Focused on creating smooth, responsive experiences that users enjoy using modern frameworks.',
      },
      backend: {
        title: 'Backend Development',
        description:
          'Creating reliable and efficient server-side applications with a focus on scalability, data management, and seamless communication with frontend systems.',
      },
      devops: {
        title: 'App Development & DevOps',
        description:
          'Creating mobile and desktop applications while managing cloud environments for reliable and efficient operations. Focused on seamless deployment, system scalability, and performance optimization.',
      },
    },
    offers: [
      {
        title: 'Backend Systems & Internal Tools',
        description:
          'Building the core systems that businesses run on — from inventory management to employee tools and workflow automation.',
        bullets: [
          'Distribution & inventory management systems',
          'Employee management & internal dashboards',
          'API design, data pipelines & business logic',
        ],
      },
      {
        title: 'Mobile Applications',
        description:
          'Cross-platform apps that solve real problems — whether it is AI-powered assistants, financial tools, or field utilities.',
        bullets: [
          'AI-integrated personal assistant apps',
          'Crypto portfolio & exchange rate tracking',
          'GPS tracking & location-based tools',
        ],
      },
      {
        title: 'Web Solutions & Frontend',
        description:
          'Responsive websites and web apps — clean, fast, and built to serve real users on any device.',
        bullets: [
          'Business websites & client-facing platforms',
          'Admin dashboards & content management',
          'Performance optimization & deployment',
        ],
      },
    ],
  },
  about: {
    eyebrow: 'About Me',
    heading: 'French engineer,\nTokyo-based craftsman.',
    bio: [
      "My work revolves around backend systems, mobile apps, and internal tools — from distribution management platforms to AI-powered assistants and crypto trackers. I care about building software that works well and lasts.",
      "Originally from France, now based in Japan. I enjoy learning new tools and adapting to whatever a project demands. If something needs to be built, I'll make it happen.",
      "When I'm not working, I'm enjoying motorsport or traveling around, discovering Japan's beautiful landscapes.",
      "I'm also actively building 508.dev — a software co-op delivering digital products for clients worldwide.",
    ],
    facts: [
      { label: 'Location', value: 'Tokyo, Japan' },
      { label: 'Focus', value: 'Backend · Mobile · AI' },
      { label: 'Languages', value: 'FR · EN · JP' },
      { label: 'Interests', value: 'Motorsport · Tech · Travel' },
    ],
    contact: {
      eyebrow: 'Get in Touch',
      title: 'Have a project in mind?',
      description: "I'd love to hear about it. Reach out through social media or send a message directly.",
      socialLabel: 'FIND ME ON',
      formLabel: 'OR SEND A MESSAGE',
      form: {
        name: 'NAME',
        email: 'EMAIL',
        message: 'MESSAGE',
        submit: 'Send Message',
        success: "Message sent successfully! We'll get back to you soon.",
        error: 'There was an error sending your message. Please try again.',
        sending: 'Sending...',
      },
    },
  },
};

export default en;
