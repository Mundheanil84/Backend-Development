import mongoose from 'mongoose';

const medicalRecordSchems = new mongoose.Schema({}, { timestamps });

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchems
);
