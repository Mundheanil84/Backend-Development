import mongoose from 'mongoose';

const doctorSchems = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Type.ObjectID,
        ref: 'Hospital',
      },
    ],
  },
  { timestamps }
);

export const Doctor = mongoose.model('Doctor', doctorSchems);
