import { DataTypes, Model, ModelAttributes } from "sequelize";
import { IStore } from "../types";

export const storeModelName = "Store";

export const storeModelAttributes: ModelAttributes<Store, IStore> = {
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
  lat: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: false,
  },
  lng: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

class Store extends Model<IStore> {}

export default Store;
