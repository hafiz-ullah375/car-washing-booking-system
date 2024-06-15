import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ServiceInServices } from "./service.service";

const createService = catchAsync(async (req, res) => {
  const serviceData = req.body;

  const result = await ServiceInServices.createServiceIntoDB(serviceData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service is created successfully",
    data: result,
  });
});

export const ServiceControllers = {
  createService,
};
