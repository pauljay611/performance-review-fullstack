import { ActionType } from "typesafe-actions";
import { Error } from "../../services/api/types";
import { IStore } from "../../types";
import * as actions from "./actions";

export interface StoreState {
  readonly stores: IStore[];
  readonly loading: boolean;
  readonly error?: Error;
}

export type StoreActionsType = ActionType<typeof actions>;
