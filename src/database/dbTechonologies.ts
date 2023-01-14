import { ITechnology } from '@/interfaces';
import { Technology } from '@/models';

import dbConnect from './connection';

export const getAllTechnologies = async (): Promise<ITechnology[] | null> => {
  await dbConnect();
  const technologies = await Technology.find();

  if (!technologies) {
    return null;
  }

  return JSON.parse(JSON.stringify(technologies));
};
