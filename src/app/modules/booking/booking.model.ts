import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";
import { vehicleTypesEnum } from "./booking.constant";

const BookingSchema: Schema = new Schema<TBooking>(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    slot: {
      type: Schema.Types.ObjectId,
      ref: "Slot",
      required: true,
    },
    vehicleType: {
      type: String,
      enum: vehicleTypesEnum,
      required: true,
    },
    vehicleBrand: {
      type: String,
      required: true,
      trim: true,
    },
    vehicleModel: {
      type: String,
      required: true,
      trim: true,
    },
    manufacturingYear: {
      type: Number,
      required: true,
      min: 1886,
    },
    registrationPlate: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = model<TBooking>("Booking", BookingSchema);

export default Booking;
