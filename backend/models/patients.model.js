import mongoose from "mongoose";

const patientsSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      unique: true,
    },
    edad: {
      type: Number,
      required: true,
    },
    diagnostico: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Patient", patientsSchema);