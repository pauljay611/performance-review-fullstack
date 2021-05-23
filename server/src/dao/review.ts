import Reivew from "../models/review";
import { IReview } from "../types";

export const findReviews = async () => {
  const reviews = await Reivew.findAll();
  return reviews;
};

export const findReviewsByEmployeeID = async (eID: number) => {
  const review = await Reivew.findAll({ where: { employee_id: eID } });
  return review;
};

export const findReviewsByReviewerID = async (rID: number) => {
  const review = await Reivew.findAll({ where: { reviewer_id: rID } });
  return review;
};

export const findReviewByID = async (id: number) => {
  const review = await Reivew.findByPk(id);
  return review;
};

export const createReview = async (reviewParams: IReview) => {
  const review = await Reivew.create(reviewParams);
  return review;
};

export const updateReviewsByID = async (id: number, reviewParams: IReview) => {
  const review = await Reivew.update(reviewParams, { where: { id } });
  return review;
};

export const deleteReviewsByID = async (id: number) => {
  const review = await Reivew.destroy({ where: { id } });
  return review;
};
