import { Epic } from "redux-observable";
import { isOfType } from "typesafe-actions";
import { from, of } from "rxjs";
import { catchError, filter, map, mergeMap } from "rxjs/operators";

import * as API from "../../services/api/catogory";

import constants from "./constants";
import { CategoriesActionsType } from "./types";
import actions from "./actions";

import { RootState } from "../index";

export const getAllCategoriesEpic: Epic<
  CategoriesActionsType,
  CategoriesActionsType,
  RootState,
  typeof API
> = (action$, _, { getCategoriesAPI }) => {
  return action$.pipe(
    filter(isOfType(constants.FETCH_ALL_CATEGORIES)),
    mergeMap(() =>
      from(getCategoriesAPI()).pipe(
        map(actions.fetchAllCategoriesSuccess),
        catchError((err) => of(actions.fetchAllCategoriesError(err)))
      )
    )
  );
};
