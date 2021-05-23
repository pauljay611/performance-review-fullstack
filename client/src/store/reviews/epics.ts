import { Epic } from "redux-observable";
import { isOfType } from "typesafe-actions";
import { from, of } from "rxjs";
import { catchError, filter, map, mergeMap, tap } from "rxjs/operators";

import * as API from "../../services/api/review";

import constants from "./constants";
import { ReviewsActionsType } from "./types";
import actions from "./actions";

import { RootState } from "../index";

export const getAllReviewsEpic: Epic<
  ReviewsActionsType,
  ReviewsActionsType,
  RootState,
  typeof API
> = (action$, _, { getReviewsAPI }) => {
  return action$.pipe(
    filter(isOfType(constants.FETCH_ALL_REVIEWS)),
    mergeMap(() =>
      from(getReviewsAPI()).pipe(
        map(actions.fetchAllReviewsSuccess),
        catchError((err) => of(actions.fetchAllReviewsError(err)))
      )
    )
  );
};

export const addReviewEpic: Epic<
  ReviewsActionsType,
  ReviewsActionsType,
  RootState,
  typeof API
> = (action$, _, { addReviewAPI }) => {
  return action$.pipe(
    filter(isOfType(constants.ADD_REVIEW)),
    mergeMap((action) =>
      from(addReviewAPI(action.payload)).pipe(
        map(actions.addReviewSuccess),
        catchError((err) => of(actions.addReviewError(err)))
      )
    )
  );
};

export const updateReviewEpic: Epic<
  ReviewsActionsType,
  ReviewsActionsType,
  RootState,
  typeof API
> = (action$, _, { updateReviewAPI }) => {
  return action$.pipe(
    filter(isOfType(constants.UPDATE_REVIEW)),
    mergeMap((action) =>
      from(updateReviewAPI(action.payload.id, action.payload.body)).pipe(
        map(actions.updateReviewSuccess),
        catchError((err) => of(actions.updateReviewError(err)))
      )
    )
  );
};

export const deleteReviewEpic: Epic<
  ReviewsActionsType,
  ReviewsActionsType,
  RootState,
  typeof API
> = (action$, _, { deleteReviewAPI }) => {
  return action$.pipe(
    filter(isOfType(constants.DELETE_REVIEW)),
    mergeMap((action) =>
      from(deleteReviewAPI(action.payload.id)).pipe(
        map(actions.deleteReviewSuccess),
        catchError((err) => of(actions.deleteReviewError(err)))
      )
    )
  );
};
