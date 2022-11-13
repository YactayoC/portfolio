import { IProject } from 'interfaces';
import { Project } from 'models';
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

export const getProjectByTitle = async (title: string): Promise<IProject | null> => {
  await dbConnect();
  const project = await Project.findOne({ title }).populate('technologies');

  if (!project) {
    return null;
  }

  return JSON.parse(JSON.stringify(project));
};
