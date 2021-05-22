import { createAction } from "typesafe-actions";
import { Error } from "../../services/api/types";
import { IUser } from "../../types";
import constants from "./constants";

export const fetchAllUsersSuccess = createAction(
  constants.FETCH_ALL_USERS_SUCCESS,
  (users: IUser[]) => users
)();

export const fetchAllUsers = createAction(constants.FETCH_ALL_USERS)();

export const fetchAllUsersError = createAction(
  constants.FETCH_ALL_USERS_ERROR,
  (error: Error) => error
)();

export default {
  fetchAllUsersSuccess,
  fetchAllUsers,
  fetchAllUsersError,
} as const;
