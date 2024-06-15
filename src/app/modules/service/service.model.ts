import { Schema, model } from "mongoose";
import { TService } from "./service.interface";

const ServiceSchema: Schema = new Schema<TService>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    duration: {
      type: Number,
      required: true,
      min: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Service = model<TService>("Service", ServiceSchema);

export default Service;
