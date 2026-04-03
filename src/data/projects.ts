import type { ImageMetadata } from 'astro';
import type { ProjectDescriptionKey } from '../i18n/types';

import naps from '../assets/naps/naps.webp';
import cryptrack from '../assets/cryptrack/cryptrack.webp';
import moneySwap from '../assets/moneySwap/moneySwap.webp';
import sirius from '../assets/siriusGarage/sirius.webp';
import kakurega from '../assets/kakurega/kakurega.webp';

export interface Project {
  id: string;
  title: string;
  descriptionKey: ProjectDescriptionKey;
  detailedDescription: ProjectDescriptionKey;
  technicalDescription: ProjectDescriptionKey;
  image: ImageMetadata;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Naps shaving',
    descriptionKey: 'napsDescription',
    detailedDescription: 'detailedNapsDescription',
    technicalDescription: 'technicalNapsDescription',
    image: naps,

    tags: ['SvelteKit', 'TypeScript', 'MicroCMS'],
    link: 'https://napsv.com/',
  },
  {
    id: '2',
    title: 'Cryptrack',
    descriptionKey: 'cryptrackDescription',
    detailedDescription: 'detailedCryptDescription',
    technicalDescription: 'technicalCryptDescription',
    image: cryptrack,

    tags: ['Golang', 'Wails', 'React'],
    link: '',
  },
  {
    id: '3',
    title: 'MoneySwap',
    descriptionKey: 'moneySwapDescription',
    detailedDescription: 'detailedMoneySwapDescription',
    technicalDescription: 'technicalMoneySwapDescription',
    image: moneySwap,

    tags: ['React-native', 'TypeScript', 'Golang'],
    link: '',
  },
  {
    id: '4',
    title: 'siriusGarage',
    descriptionKey: 'siriusGarageDescription',
    detailedDescription: 'detailedSiriusGarageDescription',
    technicalDescription: 'technicalSiriusGarageDescription',
    image: sirius,

    tags: ['SvelteKit', 'TypeScript', 'Cloudflare'],
    link: 'https://siriusgarage.fr',
  },
  {
    id: '5',
    title: 'Kakurega',
    descriptionKey: 'kakuregaDescription',
    detailedDescription: 'detailedKakuregaDescription',
    technicalDescription: 'technicalKakuregaDescription',
    image: kakurega,

    tags: ['SvelteKit', 'MicroCMS', 'TailwindCSS'],
    link: 'https://kakurega-men.com',
  },
];
