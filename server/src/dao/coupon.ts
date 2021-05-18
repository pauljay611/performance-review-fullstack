import Coupon from "../models/coupon";
import Store from "../models/store";

export const findCoupons = async () => {
  const conpons = await Coupon.findAll();
  return conpons;
};

export const findCouponByQuery = async (id: number) => {
  const conpons = await Coupon.findAll({
    include: [
      {
        model: Store as any,
        where: { id },
        attributes: [],
      },
    ],
  });
  return conpons;
};

export const findCouponByID = async (id: number) => {
  const conpon = await Coupon.findByPk(id);
  return conpon;
};
