import { ActionType } from "typesafe-actions";
import { Error } from "../../services/api/types";
import { IUser } from "../../types";
import * as actions from "./actions";

export interface UserState {
  readonly users?: IUser[];
  readonly currentUser?: IUser;
  readonly loading: boolean;
  readonly error?: Error;
}

export type UsersActionsType = ActionType<typeof actions>;
