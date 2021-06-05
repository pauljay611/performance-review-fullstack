import { ErrorRequestHandler } from "express";
import Exception from "../error";

export const errorHandler: ErrorRequestHandler = (
  err: Exception,
  req,
  res,
  next
) => {
  const { status, message } = err;
  res.status(status).send({
    status,
    message,
  });
};

export default errorHandler;
