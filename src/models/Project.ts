import mongoose, { Schema, model, Model } from 'mongoose';

import { IProject } from '@/interfaces';

const ProjectSchema = new Schema({
  title: {
    type: String,
  },

  description_en: {
    type: String,
  },

  description_es: {
    type: String,
  },

  images: [
    {
      type: String,
    },
  ],

  technologies: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Technology',
    },
  ],

  repository: {
    type: String,
  },

  video: {
    type: String,
  },

  url: {
    type: String,
  },

  salient: {
    type: Boolean,
  },

  category: {
    type: String,
  },
});

const Project: Model<IProject> = mongoose.models.Project || model('Project', ProjectSchema);
export default Project;
