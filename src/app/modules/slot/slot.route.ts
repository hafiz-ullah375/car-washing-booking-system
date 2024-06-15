import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { SlotControllers } from "./slot.controller";
import { SlotValidations } from "./slot.validation";

const router = express.Router();

router.post(
  "/slots",
  validateRequest(SlotValidations.createSlotSchema),
  SlotControllers.createSlot
);

export const SlotRoutes = router;
