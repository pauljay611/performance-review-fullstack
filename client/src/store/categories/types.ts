import { ActionType } from "typesafe-actions";
import { Error } from "../../services/api/types";
import { ICategory } from "../../types";
import * as actions from "./actions";

export interface CategoryState {
  readonly categories: ICategory[];
  readonly loading: boolean;
  readonly error?: Error;
}

export type CategoriesActionsType = ActionType<typeof actions>;
