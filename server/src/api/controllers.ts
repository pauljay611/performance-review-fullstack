import { Request, Response, NextFunction } from "express";
import Review from "../services/review";
import User from "../services/user";

export const getReviews = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reviews = await Review.getAllData(req.query);
    res.status(200).json(reviews);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const getReviewByID = async (
  req: Request<{ id: number }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const reviews = await Review.getDataByID(+req.params.id);
    res.status(200).json(reviews);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const getUsers= async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.getAllData();
    res.status(200).json(users);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const getUserByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.getDataByID(+req.params.id);
    res.status(200).json(users);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};
