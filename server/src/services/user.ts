import {
  findAllUsers,
  findUserByID,
  findUserByUsername,
  createUser,
  updateUser,
  deleteUser,
} from "../dao/user";
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
  static async setData(userParams: IUser) {
    const user = await createUser(userParams);
    return user;
  }
  static async updateDataByID(id: number, userParams: IUser) {
    const user = await updateUser(id, userParams);
    return user;
  }
  static async deleteDataByID(id: number) {
    const user = await deleteUser(id);
    return user;
  }
}

export default User;
