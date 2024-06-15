import express from "express";

import validateRequest from "../../middlewares/validateRequest";
import { BookingValidation } from "./booking.validation";

import { BookingControllers } from "./booking.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(BookingValidation.createValidationBookingSchema),
  BookingControllers.createBooking
);

export const BookingRoutes = router;
