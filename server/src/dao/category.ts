import Category from "../models/category";

export const findAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

export const findCategoryByID = async (id: number) => {
  const category = await Category.findByPk(id);
  return category;
};
