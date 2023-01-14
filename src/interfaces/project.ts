import { ITechnology } from './technology';

export interface IProject {
  _id: string;
  title: string;
  description_en: string;
  description_es: string;
  images: string[];
  technologies: ITechnology[];
  repository: string;
  video: string;
  url: string;
  salient: boolean;
  category: string;
}
