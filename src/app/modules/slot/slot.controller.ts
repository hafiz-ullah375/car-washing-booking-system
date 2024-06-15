import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SlotService } from "./slot.service";

const createSlot = catchAsync(async (req, res) => {
  const slotData = req.body;

  const result = await SlotService.createSlotIntoDB(slotData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service is created successfully",
    data: result,
  });
});

export const SlotControllers = {
  createSlot,
};
