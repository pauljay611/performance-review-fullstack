import { Request, Response, NextFunction } from "express";

import Review from "../../services/review";
import User from "../../services/user";
import { parseAuthHeader } from "../../utils";

export const getReviews = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reviews = await Review.getAllData();
    res.status(200).json(reviews);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const getReviewsByEmployeeID = async (
  req: Request<{ eID: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    // only admin can see other user's reviews
    const authHeader = req.headers.authorization;
    const decodeToken = parseAuthHeader(authHeader);
    const users = await User.getDataByID(+req.params.eID);
    const isAdmin = users.get("is_admin");
    if (!isAdmin && decodeToken["id"] !== +req.params.eID) {
      return res.status(403).send("forbidden");
    }

    const reviews = await Review.getDataByEmployeeID(+req.params.eID);
    res.status(200).json(reviews);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const getReviewsByReviewerID = async (
  req: Request<{ rID: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    // only admin can see other user's reviews
    const authHeader = req.headers.authorization;
    const decodeToken = parseAuthHeader(authHeader);
    const users = await User.getDataByID(+req.params.rID);
    const isAdmin = users.get("is_admin");
    if (!isAdmin && decodeToken["id"] !== +req.params.rID) {
      return res.status(403).send("forbidden");
    }

    const reviews = await Review.getDataByReviewerID(+req.params.rID);
    res.status(200).json(reviews);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reviewParams = req.body;
    const review = await Review.setReview(reviewParams);
    res.status(200).json(review);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const updateReviewByID = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const reviewParams = req.body;
    // only admin and reviewer can update review
    const authHeader = req.headers.authorization;
    const decodeToken = parseAuthHeader(authHeader);
    const userID = decodeToken["id"];
    const users = await User.getDataByID(userID);
    const isAdmin = users.get("is_admin");
    const review = await Review.getDataByID(+id);
    const isReviewer = review.get("reviewer_id");
    if (!isReviewer && !isAdmin) {
      return res.status(403).send("forbidden");
    }

    const reviews = await Review.updateDataByID(+id, reviewParams);
    res.status(200).json({ message: reviews[0] ? "update" : "no update" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const deleteReviewByID = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const reviews = await Review.deleteDataByID(+id);
    res.status(200).json(reviews);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};
