import { ActionType } from "typesafe-actions";
import { Error } from "../../services/api/types";
import { ICoupon } from "../../types";
import * as actions from "./actions";

export interface CouponState {
  readonly coupons: ICoupon[];
  readonly loading: boolean;
  readonly error?: Error;
}

export type CouponsActionsType = ActionType<typeof actions>;
