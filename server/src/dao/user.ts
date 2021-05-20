import User from "../models/user";
import { IUser } from "../types";

export const findAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

export const findUserByID = async (id: number) => {
  const user = await User.findByPk(id);
  return user;
};

export const findUserByUsername = async (username: string) => {
  const user = await User.findOne({ where: { username } });
  return user;
};

export const createUser = async (userParams: IUser) => {
  const user = await User.create(userParams);
  return user;
};

export const updateUser = async (id: number, userParams: IUser) => {
  const user = await User.update(userParams, { where: { id } });
  return user;
};

export const deleteUser = async (id: number) => {
  const user = await User.destroy({ where: { id } });
  return user;
};
