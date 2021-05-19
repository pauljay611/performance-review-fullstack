import { findAllUsers, findUserByID, findUserByUsername } from "../dao/user";

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
}

export default User;
