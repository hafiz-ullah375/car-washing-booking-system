import { z } from "zod";
import { vehicleTypesEnum } from "./booking.constant";

const createValidationBookingSchema = z.object({
  body: z.object({
    service: z.string().refine(
      (val) => /^[0-9a-fA-F]{24}$/.test(val),

      { message: "Invalid service ID format" }
    ),
    slot: z.string().refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
      message: "Invalid slot ID format",
    }),
    vehicleType: z.enum(vehicleTypesEnum),
    vehicleBrand: z.string({ required_error: "Vehicle brand is required" }),
    vehicleModel: z.string({ required_error: "Vehicle model is required" }),
    manufacturingYear: z
      .number()
      .min(1886, { message: "Manufacturing year must be 1886 or later" })
      .max(new Date().getFullYear(), {
        message: `Manufacturing year cannot be in the future`,
      }),
    registrationPlate: z
      .string()
      .min(1, { message: "Registration plate is required" })
      .max(10, {
        message: "Registration plate should not exceed 10 characters",
      }),
  }),
});
export const BookingValidation = {
  createValidationBookingSchema,
};
