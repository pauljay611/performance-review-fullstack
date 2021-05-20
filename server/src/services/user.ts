import { findAllUsers, findUserByID, findUserByUsername, createUser } from "../dao/user";
import { IUser } from "../types";

class User {
  static async getAllData() {
    const users = await findAllUsers();
    return users;
  }
  static async getDataByID(id: number) {
    const user = await findUserByID(id);
    return user;
  }
  static async getDataByUsername(username: string) {
    const user = await findUserByUsername(username);
    return user;
  }
  static async setUser(userParams: Omit<IUser, 'id'>) {
    const user = await createUser(userParams);
    return user;
  }
}

export default User;
