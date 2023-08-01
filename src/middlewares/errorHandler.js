import mongoose from "mongoose";
import baseError from "../errors/baseError.js";
import badRequest from "../errors/badRequest.js";
import validationError from "../errors/validationError.js";
import NotFound from "../errors/notFound.js";

// eslint-disable-next-line no-unused-vars
export default function errorHandler(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    new badRequest().sendResponse(res);
  } else if (mongoose.Error.ValidationError) {
    new validationError(err).sendResponse(res);
  } else if (err instanceof NotFound) {
    err.sendResponse(res);
  } else {
    new baseError().sendResponse(res);
  }
}
