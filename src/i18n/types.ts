export type ExpertiseKey = 'frontend' | 'backend' | 'devops';
export type ProjectDescriptionKey = keyof Translation['projects'];

export interface Translation {
  nav: {
    projects: string;
    expertise: string;
    about: string;
  };
  hero: {
    title: string;
    description: string;
    eyebrow: string;
    ctaProjects: string;
    ctaContact: string;
    statProjects: string;
    statStack: string;
    statStackValue: string;
    statBased: string;
    statBasedValue: string;
  };
  section: {
    title: string;
    viewAll: string;
  };
  featured: {
    label: string;
    viewProject: string;
  };
  footer: {
    softwareEngineer: string;
  };
  projects: {
    title: string;
    subtitle: string;
    eyebrow: string;
    description: string;
    viewCta: string;
    napsDescription: string;
    cryptrackDescription: string;
    moneySwapDescription: string;
    siriusGarageDescription: string;
    kakuregaDescription: string;
    detailedNapsDescription: string;
    technicalNapsDescription: string;
    detailedCryptDescription: string;
    technicalCryptDescription: string;
    detailedMoneySwapDescription: string;
    technicalMoneySwapDescription: string;
    detailedSiriusGarageDescription: string;
    technicalSiriusGarageDescription: string;
    detailedKakuregaDescription: string;
    technicalKakuregaDescription: string;
    voyDescription: string;
    detailedVoyDescription: string;
    technicalVoyDescription: string;
    trakioDescription: string;
    detailedTrakioDescription: string;
    technicalTrakioDescription: string;
    viewBtn: string;
    modal: {
      about: string;
      technical: string;
      visitbtn: string;
    };
  };
  expertise: {
    title: string;
    eyebrow: string;
    description: string;
    categories: Record<
      ExpertiseKey,
      {
        title: string;
        description: string;
      }
    >;
    offers: {
      title: string;
      description: string;
      bullets: string[];
    }[];
  };
  about: {
    eyebrow: string;
    heading: string;
    bio: string[];
    facts: { label: string; value: string }[];
    contact: {
      eyebrow: string;
      title: string;
      description: string;
      socialLabel: string;
      formLabel: string;
      form: {
        name: string;
        email: string;
        message: string;
        submit: string;
        success: string;
        error: string;
        sending: string;
      };
    };
  };
}
