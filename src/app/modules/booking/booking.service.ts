import { TBooking } from "./booking.interface";
import Booking from "./booking.model";

const createBookingIntoDB = async (payload: TBooking) => {
  const booking = (
    await (await Booking.create(payload)).populate("slot")
  ).populate("service");
  return booking;
};

export const BookingServices = {
  createBookingIntoDB,
};
