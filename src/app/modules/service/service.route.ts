import express from "express";

import validateRequest from "../../middlewares/validateRequest";
import { ServiceControllers } from "./service.controller";
import { ServiceValidations } from "./service.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(ServiceValidations.createServiceValidationSchema),
  ServiceControllers.createService
);

export const ServiceRoutes = router;
