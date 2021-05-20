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

export const createUser = async (userParams: Omit<IUser, 'id'>) => {
  const user = await User.create(userParams);
  return user;
};