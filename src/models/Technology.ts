import mongoose, { Schema, model, Model } from 'mongoose';

import { ITechnology } from '@/interfaces';

const TechnologySchema = new Schema({
  name: {
    type: String,
  },

  image: {
    type: String,
  },

  category: {
    type: String,
    enum: {
      values: ['Client', 'Admin'],
    },
  },
});

const Technology: Model<ITechnology> = mongoose.models.Technology || model('Technology', TechnologySchema);
export default Technology;
