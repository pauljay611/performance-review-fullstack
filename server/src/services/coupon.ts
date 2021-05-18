import { findCoupons, findCouponByQuery, findCouponByID } from "../dao/coupon";

interface FindCouponsQuery {
  id?: number;
}
class Coupon {
  static async getAllData(query: FindCouponsQuery) {
    if (!query.id) {
      const coupons = await findCoupons();
      return coupons;
    }
    const coupons = await findCouponByQuery(query.id);
    return coupons;
  }
  static async getDataByID(id: number) {
    const coupons = await findCouponByID(id);
    return coupons;
  }
}

export default Coupon;
