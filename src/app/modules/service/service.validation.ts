import { z } from "zod";

const createServiceValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }).trim(),
    description: z.string({ required_error: "Description is required" }).trim(),
    price: z.number().nonnegative("Price must be a non-negative number"),
    duration: z
      .number()
      .int()
      .nonnegative("Duration must be a non-negative integer"),
    isDeleted: z.boolean().default(false),
  }),
});

export const ServiceValidations = {
  createServiceValidationSchema,
};
