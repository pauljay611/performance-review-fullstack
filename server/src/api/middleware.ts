import { ErrorRequestHandler } from "express";
import Exception from "../error";

export const errorHandler: ErrorRequestHandler = (
  err: Exception,
  req,
  res,
  next
) => {
  const status = err.status || 500;
  let message = err.message || "Something went wrong";

  if (status === 301) {
    message = "api not found";
  }

  res.status(status).send({
    status,
    message,
  });
};

export default errorHandler;
