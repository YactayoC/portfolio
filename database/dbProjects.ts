import { IProject } from 'interfaces';
import { Project } from 'models';
import dbConnect from './connection';

export const getProjectByTitle = async (title: string): Promise<IProject | null> => {
  await dbConnect();
  const project = await Project.findOne({ title }).lean();

  if (!project) {
    return null;
  }

  return JSON.parse(JSON.stringify(project));
};

interface ProjectTitle {
  title: string;
}

export const getAllProjectsTitles = async (): Promise<ProjectTitle[]> => {
  await dbConnect();
  const projects = await Project.find().select('title -_id').lean();
  return projects;
};
