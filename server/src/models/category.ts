import { DataTypes, Model, ModelAttributes } from "sequelize";
import { ICategory } from "../types";

export const categoryModelName = "Category";

export const categoryModelAttributes: ModelAttributes<Category, ICategory> = {
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
};

class Category extends Model<ICategory> {}

export default Category;
