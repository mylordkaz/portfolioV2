import type { Translation } from "../types";

const en: Translation = {
  nav: {
    projects: "Projects",
    expertise: "Expertise",
    about: "About",
    contact: "Contact",
  },
  hero: {
    title: "Software Engineer & Web Designer",
    description:
      "Digital craftsman who Deliver high-performance web solutions. Based in Tokyo, Japan.",
  },
  footer: {
    softwareEngineer: "Software Engineer",
  },
  projects: {
    title: "My Projects",
    subtitle: "Portfolio Showcase",
    description:
      "Explore my latest works and technical projects. Each project represents a unique challenge and innovative solution.",
  },
  expertise: {
    title: "Technical Expertise",
    description:
      "Specialized in full-stack development with a strong focus on speed, efficiency, and precision using modern technologies. Passionate about optimizing performance, reliable and scalable solutions that enhance user experiences.",
    categories: {
      frontend: {
        title: "Frontend Development",
        description:
          "Building fast and user-friendly interfaces that look great on any device. Focused on creating smooth, responsive experiences that users enjoy using modern frameworks.",
      },
      backend: {
        title: "Backend Development",
        description:
          "Creating reliable and efficient server-side applications with a focus on scalability, data management, and seamless communication with frontend systems.",
      },
      devops: {
        title: "App Development & DevOps",
        description:
          "Creating mobile and desktop applications while managing cloud environments for reliable and efficient operations. Focused on seamless deployment, system scalability, and performance optimization.",
      },
    },
  },
  about: {
    title: "About Me",
    description:
      "A French Software Engineer passionate about Blockchain & emerging Tech. Whether it's a sleek user interface or a powerful backend system, I focus on delivering solutions that truly work.",
    intro: {
      title: "Who I Am",
      content: `Born in France, living in Japan, I've always been curious and driven by challenges. My journey has taken me from managing luxury hospitality across continents to immersing myself in the world of technology.\nWhen I’m not coding, you’ll probably find me working on my cars or exploring the beautiful landscapes of Japan.`,
    },
    services: {
      title: "What I Offer",
      items: [
        {
          title: "Web Application Development",
          description:
            "Full-stack solutions for responsive and secure web applications with intuive and beautiful design.",
        },
        {
          title: "Mobile & Desktop App Development",
          description:
            "Creating custom cross-platform applications tailored to your specific needs.",
        },
        {
          title: "Performance & Optimization",
          description:
            "Crafting reliable server-side systems while enhancing speed and efficiency for seamless operations.",
        },
      ],
    },
    button: "Get in touch...",
  },
  contact: {
    title: "Let's Connect",
    description:
      "Have a project in mind? I'd love to hear about it. Drop me a message or connect through social media.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
    },
    socials: {
      title: "Find me on",
      description:
        "Feel free to connect with me on social media or send me an email.",
    },
  },
};

export default en;
