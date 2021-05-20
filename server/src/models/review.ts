import { DataTypes, Model, ModelAttributes } from "sequelize";
import { IReview } from "../types";

export const reviewModelName = "Review";

export const reviewModelAttributes: ModelAttributes<Review, IReview> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  reviewer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  feedback: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  is_reviewed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
};

class Review extends Model<IReview> {}

export default Review;
