import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }).trim(),
    email: z.string({ required_error: "Email is required" }).email().trim(),
    password: z.string({ required_error: "Password is required" }),
    phone: z.string({ required_error: "Phone number is required" }).trim(),
    role: z.enum(["admin", "user"]),
    address: z.string({ required_error: "Address is required" }).trim(),
  }),
});

export const userValidations = {
  createUserValidationSchema,
};
