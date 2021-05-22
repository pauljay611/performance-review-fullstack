import { Epic } from "redux-observable";
import { isOfType } from "typesafe-actions";
import { from, of } from "rxjs";
import { catchError, filter, map, mergeMap } from "rxjs/operators";

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
    filter(isOfType(constants.FETCH_ALL_REVEIWS)),
    mergeMap((action) =>
      from(getReviewsAPI()).pipe(
        map(actions.fetchAllReviewsSuccess),
        catchError((err) => of(actions.fetchAllReviewsError(err)))
      )
    )
  );
};
