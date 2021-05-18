import { Epic } from "redux-observable";
import { isOfType } from "typesafe-actions";
import { from, of } from "rxjs";
import { catchError, filter, map, mergeMap } from "rxjs/operators";

import * as API from "../../services/api/coupon";

import constants from "./constants";
import { CouponsActionsType } from "./types";
import actions from "./actions";

import { RootState } from "../index";

export const getAllCouponsEpic: Epic<
  CouponsActionsType,
  CouponsActionsType,
  RootState,
  typeof API
> = (action$, _, { getCouponsAPI }) => {
  return action$.pipe(
    filter(isOfType(constants.FETCH_ALL_COUPONS)),
    mergeMap((action) =>
      from(getCouponsAPI(action.payload)).pipe(
        map(actions.fetchAllCouponsSuccess),
        catchError((err) => of(actions.fetchAllCouponsError(err)))
      )
    )
  );
};
