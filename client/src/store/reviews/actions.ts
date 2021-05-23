import { createAction } from "typesafe-actions";
import { Error } from "../../services/api/types";
import { IReview } from "../../types";
import constants from "./constants";

interface IReviewPayload {
  id: number;
}

export const fetchAllReviewsSuccess = createAction(
  constants.FETCH_ALL_REVIEWS_SUCCESS,
  (reviews: IReview[]) => reviews
)();

export const fetchAllReviews = createAction(
  constants.FETCH_ALL_REVIEWS,
  () => {}
)();

export const fetchAllReviewsError = createAction(
  constants.FETCH_ALL_REVIEWS_ERROR,
  (error: Error) => error
)();

export const fetchReviewSuccess = createAction(
  constants.FETCH_REVIEW_SUCCESS,
  (review: IReview) => review
)();

export const fetchReview = createAction(
  constants.FETCH_REVIEW,
  (payload: IReviewPayload) => payload
)();

export const fetchReviewError = createAction(
  constants.FETCH_REVIEW_ERROR,
  (error: Error) => error
)();

export const addReviewSuccess = createAction(
  constants.ADD_REVIEW_SUCCESS,
  (review: IReview) => review
)();

export const addReview = createAction(
  constants.ADD_REVIEW,
  (payload: Omit<IReview, "id">) => payload
)();

export const addReviewError = createAction(
  constants.ADD_REVIEW_ERROR,
  (error: Error) => error
)();

export const updateReviewSuccess = createAction(
  constants.UPDATE_REVIEW_SUCCESS,
  (review: IReview) => review
)();

export const updateReview = createAction(
  constants.UPDATE_REVIEW,
  (payload: { id: number; body: Omit<IReview, "id"> }) => payload
)();

export const updateReviewError = createAction(
  constants.UPDATE_REVIEW_ERROR,
  (error: Error) => error
)();

export const deleteReviewSuccess = createAction(
  constants.DELETE_REVIEW_SUCCESS,
  (review: IReview) => review
)();

export const deleteReview = createAction(
  constants.DELETE_REVIEW,
  (payload: { id: number }) => payload
)();

export const deleteReviewError = createAction(
  constants.DELETE_REVIEW_SUCCESS,
  (error: Error) => error
)();

export default {
  fetchAllReviewsSuccess,
  fetchAllReviews,
  fetchAllReviewsError,
  fetchReviewSuccess,
  fetchReview,
  fetchReviewError,
  addReviewSuccess,
  addReview,
  addReviewError,
  updateReviewSuccess,
  updateReview,
  updateReviewError,
  deleteReview,
  deleteReviewError,
  deleteReviewSuccess,
} as const;
