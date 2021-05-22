import { createReducer } from "typesafe-actions";
import { ReviewState, ReviewsActionsType } from "./types";
import actions from "./actions";

const initialState: ReviewState = {
  reviews: [],
  loading: false,
};

const reducer = createReducer<ReviewState, ReviewsActionsType>(initialState)
  .handleAction(actions.fetchAllReviewsSuccess, (_, actions) => ({
    reviews: actions.payload,
    loading: false,
  }))
  .handleAction(actions.fetchAllReviews, (state) => {
    return { reviews: state.reviews, loading: true };
  })
  .handleAction(actions.fetchAllReviewsError, (_, actions) => {
    return { reviews: [], loading: false, error: actions.payload };
  });

export default reducer;
