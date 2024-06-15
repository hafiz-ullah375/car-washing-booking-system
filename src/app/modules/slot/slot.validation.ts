import { z } from "zod";

// Zod Validation Schema for Slot
export const createSlotSchema = z.object({
  body: z
    .object({
      service: z.string().refine((val) => /^[0-9a-fA-F]{24}$/.test(val), {
        message: "Invalid service ID format",
      }),
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
        message: "Date must be in YYYY-MM-DD format",
      }),
      startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
        message: "Start time must be in HH:mm format",
      }),
      endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
        message: "End time must be in HH:mm format",
      }),
      isBooked: z
        .enum(["available", "booked", "canceled"])
        .default("available"),
    })
    .refine((data) => data.startTime < data.endTime, {
      message: "Start time must be before end time",
      path: ["startTime", "endTime"],
    }),
});
export const SlotValidations = {
  createSlotSchema,
};
