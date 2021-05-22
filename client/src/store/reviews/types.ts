import { ActionType } from "typesafe-actions";
import { Error } from "../../services/api/types";
import { IReview } from "../../types";
import * as actions from "./actions";

export interface ReviewState {
  readonly reviews: IReview[];
  readonly loading: boolean;
  readonly error?: Error;
}

export type ReviewsActionsType = ActionType<typeof actions>;
