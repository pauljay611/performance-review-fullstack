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

export const fetchAllReviews = createAction(constants.FETCH_ALL_REVIEWS)();

export const fetchAllReviewsError = createAction(
  constants.FETCH_ALL_REVIEWS_ERROR,
  (error: Error) => error
)();

export const fetchEmployeesReviewsSuccess = createAction(
  constants.FETCH_EMPLOYEES_REVIEW_SUCCESS,
  (review: IReview[]) => review
)();

export const fetchEmployeesReviews = createAction(
  constants.FETCH_EMPLOYEES_REVIEW,
  (payload: IReviewPayload) => payload
)();

export const fetchEmployeesReviewsError = createAction(
  constants.FETCH_EMPLOYEES_REVIEW_ERROR,
  (error: Error) => error
)();

export const fetchReviewersReviewsSuccess = createAction(
  constants.FETCH_REVIEWERS_REVIEW_SUCCESS,
  (review: IReview[]) => review
)();

export const fetchReviewersReviews = createAction(
  constants.FETCH_REVIEWERS_REVIEW,
  (payload: IReviewPayload) => payload
)();

export const fetchReviewersReviewsError = createAction(
  constants.FETCH_REVIEWERS_REVIEW_ERROR,
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
  fetchEmployeesReviewsSuccess,
  fetchEmployeesReviews,
  fetchEmployeesReviewsError,
  fetchReviewersReviewsSuccess,
  fetchReviewersReviews,
  fetchReviewersReviewsError,
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
