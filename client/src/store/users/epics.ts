import { Epic } from "redux-observable";
import { isOfType } from "typesafe-actions";
import { from, of } from "rxjs";
import { catchError, filter, map, mergeMap } from "rxjs/operators";

import * as API from "../../services/api/user";

import constants from "./constants";
import { UsersActionsType } from "./types";
import actions from "./actions";

import { RootState } from "../index";

export const getAllUsersEpic: Epic<
  UsersActionsType,
  UsersActionsType,
  RootState,
  typeof API
> = (action$, _, { getUsersAPI }) => {
  return action$.pipe(
    filter(isOfType(constants.FETCH_ALL_USERS)),
    mergeMap(() =>
      from(getUsersAPI()).pipe(
        map(actions.fetchAllUsersSuccess),
        catchError((err) => of(actions.fetchAllUsersError(err)))
      )
    )
  );
};
