import { createAction } from "typesafe-actions";
import { Error } from "../../services/api/types";
import { IUser } from "../../types";
import constants from "./constants";

interface IUserPayload {
  id: number;
}

export const fetchAllUsersSuccess = createAction(
  constants.FETCH_ALL_USERS_SUCCESS,
  (users: IUser[]) => users
)();

export const fetchAllUsers = createAction(constants.FETCH_ALL_USERS)();

export const fetchAllUsersError = createAction(
  constants.FETCH_ALL_USERS_ERROR,
  (error: Error) => error
)();

export const fetchUserSuccess = createAction(
  constants.FETCH_USER_SUCCESS,
  (user: IUser) => user
)();

export const fetchUser = createAction(
  constants.FETCH_USER,
  (payload: IUserPayload) => payload
)();

export const fetchUserError = createAction(
  constants.FETCH_USER_ERROR,
  (error: Error) => error
)();

export default {
  fetchAllUsersSuccess,
  fetchAllUsers,
  fetchAllUsersError,
  fetchUserSuccess,
  fetchUser,
  fetchUserError,
} as const;
