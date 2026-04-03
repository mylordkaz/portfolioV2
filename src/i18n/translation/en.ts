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
      'A full-featured Beauty salon website, with integrated blog.',
    cryptrackDescription:
      'A MacOs desktop app, Cryptocurrencies portfolio tracker.',
    moneySwapDescription:
      'Cross-platform mobile app, giving the money exchange rate in real-time of Fiat and Cryptocurrency.',
    siriusGarageDescription:
      'A modern website renewal for a French car mechanic garage, showcasing services and contact information.',
    kakuregaDescription:
      'A mobile-first designed website with integrated blog for a newly opened barber salon for men in Tokyo.',
    detailedNapsDescription:
      'Naps is a modern, multilingual beauty salon website thoughtfully designed for an English and Japanese audience. The site seamlessly presents salon services, treatment details, and a curated blog section to guide visitors through their beauty journey. With integrated booking functionality, customers can easily explore services and make appointments in their preferred language.',
    technicalNapsDescription:
      'Built on SvelteKit with TypeScript and styled using TailwindCSS, the site features robust internationalization through Paraglide supporting English and Japanese content. The architecture includes client-side routing and dynamic content loading, with MicroCMS integration handling blog content management. Deployed on Netlify, the site implements comprehensive SEO optimization for both languages, ensuring strong search visibility in both markets. The responsive design and performance optimization create a smooth user experience across all devices.',
    detailedCryptDescription:
      'Cryptrack is a native macOS desktop application that helps users track their cryptocurrency investments. It features real-time price updates, portfolio management with buy/sell transaction tracking, performance analytics, and a clean, modern interface with dark/light mode support. Users can securely manage multiple cryptocurrencies, and analyze their investment gains and losses over time.',
    technicalCryptDescription:
      "Built with Wails v2.9 (Go/React), this desktop application combines a Go backend for business logic and data management with a React TypeScript frontend using Tailwind CSS for styling. The app integrates with CoinMarketCap's API for real-time crypto data, uses SQLite with GORM for persistent storage, implements secure user authentication with bcrypt hashing, and leverages the macOS keychain for session management. The architecture follows a service-based pattern with clean separation between the UI, business logic, and data layers.",
    detailedMoneySwapDescription:
      'MoneySwap is a comprehensive currency conversion application that bridges the gap between traditional fiat currencies and cryptocurrencies. The app provides real-time exchange rates for major fiat currencies and a wide range of cryptocurrencies, enabling users to make informed decisions about their currency exchanges. With an intuitive interface, users can easily track multiple currency pairs simultaneously. The app focuses on delivering accurate, up-to-the-minute conversion rates while maintaining a smooth, responsive user experience across both iOS and Android platforms.',
    technicalMoneySwapDescription:
      'Built with React Native for cross-platform compatibility, the app features a clean, component-based architecture with TypeScript for enhanced type safety. The backend is powered by a robust Golang API service, utilizing goroutines for efficient concurrent processing of multiple exchange rate feeds. The system integrates with various financial APIs for fiat currency rates and cryptocurrency data, implementing WebSocket connections for real-time price updates. The backend implements a caching layer, while the mobile app uses local storage for offline functionality and user preferences. The application follows clean architecture principles, with clear separation of concerns between the UI, business logic, and data layers, ensuring maintainability and scalability. A webapp version is also under development.',
    detailedSiriusGarageDescription:
      'SiriusGarage is a comprehensive website redesign for a professional automotive repair shop in France. The site serves as a digital storefront, elegantly showcasing their specialized mechanical services, repair capabilities, and automotive expertise. With a streamlined interface, potential customers can easily explore service offerings, and access contact information. The design emphasizes trust and professionalism while maintaining visual elements that reflect the hands-on nature of automotive work.',
    technicalSiriusGarageDescription:
      'Built with SvelteKit and TypeScript, the SiriusGarage website delivers great performance and user experience. The architecture implements advanced SEO optimization, including semantic HTML structure, structured data for local business, and optimized metadata for search engine visibility. The responsive design was crafted using a mobile-first approach with custom breakpoints for perfect display across all device sizes. Deployed on Cloudflare, the site benefits from global CDN distribution, ensuring fast loading times and high availability for visitors from any location.',
    detailedKakuregaDescription:
      "Kakurega is a modern, mobile-first website designed for a newly opened barber salon in Tokyo that specializes in traditional and contemporary men's grooming services. The site showcases the salon's unique atmosphere, service offerings, and skilled barbers while featuring an integrated blog to share grooming tips, style trends, and salon updates. With a focus on the Tokyo market, the website emphasizes the salon's commitment to quality craftsmanship and creating a comfortable space for men to relax and enjoy professional grooming services.",
    technicalKakuregaDescription:
      "Built with SvelteKit and TypeScript for optimal performance and maintainability, the website utilizes TailwindCSS for responsive, mobile-first design that ensures perfect display across all devices. The architecture integrates MicroCMS as a headless content management system, enabling easy blog content creation and management while maintaining fast loading speeds. The site implements comprehensive SEO optimization with structured data for local business visibility and optimized metadata for Tokyo-based search queries. The mobile-first approach prioritizes smartphone users, which constitute the majority of the target audience, while the clean, modern design reflects the salon's blend of traditional Japanese aesthetics with contemporary styling.",
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
