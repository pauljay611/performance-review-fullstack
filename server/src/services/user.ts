import { findAllUsers, findUserByID } from "../dao/user";

class Category {
  static async getAllData() {
    const users = await findAllUsers();
    return users;
  }
  static async getDataByID(id: number) {
    const user = await findUserByID(id);
    return user;
  }
}

export default Category;
