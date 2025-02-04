import { string } from "astro:schema";

export type ExpertiseKey = "frontend" | "backend" | "devops";

export interface Translation {
  nav: {
    projects: string;
    expertise: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    description: string;
  };
  section: {
    title: string;
  };
  footer: {
    softwareEngineer: string;
  };
  projects: {
    title: string;
    subtitle: string;
    description: string;
  };
  expertise: {
    title: string;
    description: string;
    categories: Record<
      ExpertiseKey,
      {
        title: string;
        description: string;
      }
    >;
  };
  about: {
    title: string;
    description: string;
    intro: {
      title: string;
      content: string;
    };
    services: {
      title: string;
      items: [
        {
          title: string;
          description: string;
        },
        {
          title: string;
          description: string;
        },
        {
          title: string;
          description: string;
        },
      ];
    };
    button: string;
  };
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    socials: {
      title: string;
      description: string;
    };
  };
}
