import { createAction } from "typesafe-actions";
import { Error } from "../../services/api/types";
import { ICoupon, ICouponsPayload } from "../../types";
import constants from "./constants";

export const fetchAllCouponsSuccess = createAction(
  constants.FETCH_ALL_COUPONS_SUCCESS,
  (coupons: ICoupon[]) => coupons
)();

export const fetchAllCoupons = createAction(
  constants.FETCH_ALL_COUPONS,
  (payload: ICouponsPayload) => payload
)();

export const fetchAllCouponsError = createAction(
  constants.FETCH_ALL_COUPONS_ERROR,
  (error: Error) => error
)();

export default {
  fetchAllCouponsSuccess,
  fetchAllCoupons,
  fetchAllCouponsError,
} as const;
