import { api } from "./config";
import { ICoupon, ICouponsPayload } from "../../types";

export const getCouponsAPI = (payload: ICouponsPayload) =>
  api
    .get<ICoupon[]>("/coupons", { params: { id: payload.storeID } })
    .then((res) => {
      return res.data;
    });
