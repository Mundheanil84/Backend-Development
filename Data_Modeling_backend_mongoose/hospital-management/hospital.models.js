import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Hospital name is required'],
      trim: true,
      minlength: [2, 'Hospital name must be at least 2 characters long'],
      maxlength: [100, 'Hospital name cannot exceed 100 characters'],
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
    },
    phone: {
      type: String,
      match: [/^\d{3}-\d{3}-\d{4}$/, 'Please use XXX-XXX-XXXX format'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    specializedIn: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);
