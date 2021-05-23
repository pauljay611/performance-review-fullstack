import { createReducer } from "typesafe-actions";
import { ReviewState, ReviewsActionsType } from "./types";
import actions from "./actions";

const initialState: ReviewState = {
  loading: false,
};

const reducer = createReducer<ReviewState, ReviewsActionsType>(initialState)
  .handleAction(actions.fetchAllReviewsSuccess, (state, actions) => ({
    ...state,
    reviews: actions.payload,
    loading: false,
  }))
  .handleAction(actions.fetchAllReviews, (state) => {
    return { Reviews: state.reviews, loading: true };
  })
  .handleAction(actions.fetchAllReviewsError, (state, actions) => {
    return { ...state, reviews: [], loading: false, error: actions.payload };
  })
  .handleAction(actions.fetchEmployeesReviewsSuccess, (state, actions) => ({
    ...state,
    reviews: actions.payload,
    loading: false,
  }))
  .handleAction(actions.fetchEmployeesReviews, (state) => {
    return { Reviews: state.reviews, loading: true };
  })
  .handleAction(actions.fetchEmployeesReviewsError, (state, actions) => {
    return { ...state, reviews: [], loading: false, error: actions.payload };
  })
  .handleAction(actions.addReviewSuccess, (state) => {
    return {
      ...state,
      loading: false,
    };
  })
  .handleAction(actions.addReview, (state) => {
    return { ...state, loading: true };
  })
  .handleAction(actions.addReviewError, (state, actions) => {
    return { ...state, loading: false, error: actions.payload };
  })
  .handleAction(actions.updateReviewSuccess, (state) => {
    return {
      ...state,
      loading: false,
    };
  })
  .handleAction(actions.updateReview, (state) => {
    return { ...state, loading: true };
  })
  .handleAction(actions.updateReviewError, (state, actions) => {
    return { ...state, loading: false, error: actions.payload };
  })
  .handleAction(actions.deleteReviewSuccess, (state) => {
    return {
      ...state,
      loading: false,
    };
  })
  .handleAction(actions.deleteReview, (state) => {
    return { ...state, loading: true };
  })
  .handleAction(actions.deleteReviewError, (state, actions) => {
    return { ...state, loading: false, error: actions.payload };
  });

export default reducer;
