import { IProject } from '@/interfaces';
import { Project } from '@/models';

import dbConnect from './connection';

export const getSalientProjects = async (): Promise<IProject[] | null> => {
  await dbConnect();
  const projects = await Project.find({ salient: true }).populate('technologies');

  if (!projects) {
    return null;
  }

  return JSON.parse(JSON.stringify(projects));
};

export const getAllProjects = async (): Promise<IProject[] | null> => {
  await dbConnect();
  const projects = await Project.find().populate('technologies');

  if (!projects) {
    return null;
  }

  return JSON.parse(JSON.stringify(projects));
};

export const getAllProjectsExternalAPI = async (): Promise<IProject[] | null> => {
  await dbConnect();
  const projects = await Project.find({ category: 'external' }).populate('technologies');

  if (!projects) {
    return null;
  }

  return JSON.parse(JSON.stringify(projects));
};

export const getAllProjectsOwnAPI = async (): Promise<IProject[] | null> => {
  await dbConnect();
  const projects = await Project.find({ category: 'own' }).populate('technologies');

  if (!projects) {
    return null;
  }

  return JSON.parse(JSON.stringify(projects));
};

// export const getAllProjectsLayouts = async (): Promise<IProject[] | null> => {
//   await dbConnect();
//   const projects = await Project.find({category: "layout"}).populate('technologies');

//   if (!projects) {
//     return null;
//   }

//   return JSON.parse(JSON.stringify(projects));
// };

export const getProjectByTitle = async (title: string): Promise<IProject | null> => {
  await dbConnect();
  const project = await Project.findOne({ title }).populate('technologies');

  if (!project) {
    return null;
  }

  return JSON.parse(JSON.stringify(project));
};
