import { ITechnology } from './technology';

export interface IProject {
  _id: string;
  title: string;
  description: string;
  images: string[];
  technologies: ITechnology[];
  repository: string;
  video: string;
  url: string;
  salient: boolean;
}
