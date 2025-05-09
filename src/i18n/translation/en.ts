import type { Translation } from '../types';

const en: Translation = {
  nav: {
    projects: 'Projects',
    expertise: 'Expertise',
    about: 'About',
    contact: 'Contact',
  },
  hero: {
    title: 'Software Engineer & Web Designer',
    description:
      'Digital craftsman who Deliver high-performance web solutions. Based in Tokyo, Japan.',
  },
  section: {
    title: 'Latest Projects',
  },
  footer: {
    softwareEngineer: 'Software Engineer',
  },
  projects: {
    title: 'My Projects',
    subtitle: 'Portfolio Showcase',
    description:
      'Explore my latest works and technical projects. Each project represents a unique challenge and innovative solution.',
    napsDescription:
      'A full-featured Beauty salon website, with integrated blog.',
    cryptrackDescription:
      'A MacOs desktop app, Cryptocurrencies portfolio tracker.',
    moneySwapDescription:
      'Cross-platform mobile app, giving the money exchange rate in real-time of Fiat and Cryptocurrency.',
    siriusGarageDescription:
      'A modern website renewal for a French car mechanic garage, showcasing services and contact information.',
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
    viewBtn: 'View Details',
    modal: {
      about: 'About the Project',
      technical: 'Technical Overview',
      gallery: 'Gallery',
      visitbtn: 'Visit Website',
    },
  },

  expertise: {
    title: 'Technical Expertise',
    description:
      'Specialized in full-stack development with a strong focus on speed, efficiency, and precision using modern technologies. Passionate about optimizing performance, reliable and scalable solutions that enhance user experiences.',
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
  },
  about: {
    title: 'About Me',
    description:
      "A French Software Engineer passionate about Blockchain & emerging Tech. Whether it's a sleek user interface or a powerful backend system, I focus on delivering solutions that truly work.",
    intro: {
      title: 'Who I Am',
      content: `Born in France, living in Japan, I've always been curious and driven by challenges. My journey has taken me from managing luxury hospitality across continents to immersing myself in the world of technology.\nWhen I’m not coding, you’ll probably find me working on my cars or exploring the beautiful landscapes of Japan.`,
    },
    services: {
      title: 'What I Offer',
      items: [
        {
          title: 'Web Application Development',
          description:
            'Full-stack solutions for responsive and secure web applications with intuive and beautiful design.',
        },
        {
          title: 'Mobile & Desktop App Development',
          description:
            'Creating custom cross-platform applications tailored to your specific needs.',
        },
        {
          title: 'Performance & Optimization',
          description:
            'Crafting reliable server-side systems while enhancing speed and efficiency for seamless operations.',
        },
      ],
    },
    button: 'Get in touch...',
  },
  contact: {
    title: "Let's Connect",
    description:
      "Have a project in mind? I'd love to hear about it. Drop me a message or connect through social media.",
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send Message',
      success: "Message sent successfully! We'll get back to you soon.",
      error: 'There was an error sending your message. Please try again.',
      sending: 'Sending...',
    },
    socials: {
      title: 'Find me on',
      description:
        'Feel free to connect with me on social media or send me an email.',
    },
  },
};

export default en;
