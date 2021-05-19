import { DataTypes, Model, ModelAttributes } from "sequelize";
import { IUser } from "../types";

export const userModelName = "Users";

export const userModelAttributes: ModelAttributes<User, IUser> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.CHAR(36),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
};

class User extends Model<IUser> {}

export default User;
