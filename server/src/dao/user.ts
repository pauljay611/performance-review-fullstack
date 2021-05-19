import User from "../models/user";

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