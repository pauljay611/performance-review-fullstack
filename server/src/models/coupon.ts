import { DataTypes, Model, ModelAttributes } from "sequelize";
import { ICoupon, CouponType } from "../types";

export const couponModelName = "Coupon";

export const couponModelAttributes: ModelAttributes<Coupon, ICoupon> = {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM(...Object.keys(CouponType)),
    allowNull: false,
  },
  dueTimestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
};

class Coupon extends Model<ICoupon> {}

export default Coupon;
