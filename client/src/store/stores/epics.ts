import { Epic } from "redux-observable";
import { isOfType } from "typesafe-actions";
import { from, of } from "rxjs";
import { catchError, filter, map, mergeMap, tap } from "rxjs/operators";

import * as API from "../../services/api/store";

import constants from "./constants";
import { StoreActionsType } from "./types";
import actions from "./actions";

import { RootState } from "../index";

export const getAllStoresEpic: Epic<
  StoreActionsType,
  StoreActionsType,
  RootState,
  typeof API
> = (action$, _, { getStoresAPI }) => {
  return action$.pipe(
    filter(isOfType(constants.FETCH_ALL_STORES)),
    mergeMap((action) =>
      from(getStoresAPI(action.payload)).pipe(
        map(actions.fetchAllStoresSuccess),
        catchError((err) => of(actions.fetchAllStoresError(err)))
      )
    )
  );
};
