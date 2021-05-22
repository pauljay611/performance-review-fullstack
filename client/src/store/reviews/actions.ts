import { createAction } from "typesafe-actions";
import { Error } from "../../services/api/types";
import { IReview } from "../../types";
import constants from "./constants";

export const fetchAllReviewsSuccess = createAction(
  constants.FETCH_ALL_REVEIWS_SUCCESS,
  (reviews: IReview[]) => reviews
)();

export const fetchAllReviews = createAction(
  constants.FETCH_ALL_REVEIWS,
  () => {}
)();

export const fetchAllReviewsError = createAction(
  constants.FETCH_ALL_REVEIWS_ERROR,
  (error: Error) => error
)();

export default {
  fetchAllReviewsSuccess,
  fetchAllReviews,
  fetchAllReviewsError,
} as const;
