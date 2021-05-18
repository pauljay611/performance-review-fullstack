import { findAllCategories, findCategoryByID } from "../dao/category";

class Category {
  static async getAllData() {
    const categories = await findAllCategories();
    return categories;
  }
  static async getDataByID(id: number) {
    const categories = await findCategoryByID(id);
    return categories;
  }
}

export default Category;
