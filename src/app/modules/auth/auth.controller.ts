import httpStatus from "http-status";

import { AuthServices } from "./auth.service";
import catchAsync from "../../utils/catchAsync";

import sendResponse from "../../utils/sendResponse";
import config from "../../config";

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { refreshToken, accessToken, user } = result;

  res.cookie("refreshToken", refreshToken, {
    secure: config.NODE_ENV === "production",
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is logged in successfully!",
    token: accessToken,
    data: user,
  });
});

export const AuthControllers = {
  loginUser,
};
