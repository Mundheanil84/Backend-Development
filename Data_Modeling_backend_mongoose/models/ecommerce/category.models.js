import mongoose from 'mongoose';

const categorySchems = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model('Categories', categorySchems);
