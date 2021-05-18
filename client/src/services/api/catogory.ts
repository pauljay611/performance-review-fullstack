import { api } from "./config";
import { ICategory } from "../../types";

export const getCategoriesAPI = () =>
  api.get<ICategory[]>("/categories").then((res) => {
    return res.data;
  });
