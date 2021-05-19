import User from "../models/user";

export const findAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

export const findUserByID = async (id: number) => {
  const user = await User.findByPk(id);
  return user;
};
