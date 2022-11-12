import mongoose, { Schema, model, Model } from 'mongoose';

import { IProject } from 'interfaces';

const ProjectSchema = new Schema({
  title: {
    type: String,
  },

  description: {
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
  }
});

const Project: Model<IProject> = mongoose.models.Project || model('Project', ProjectSchema);
export default Project;
