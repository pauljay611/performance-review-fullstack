import { createAction } from "typesafe-actions";
import { Error } from "../../services/api/types";
import { ICategory } from "../../types";
import constants from "./constants";

export const fetchAllCategoriesSuccess = createAction(
  constants.FETCH_ALL_CATEGORIES_SUCCESS,
  (coupons: ICategory[]) => coupons
)();

export const fetchAllCategories = createAction(
  constants.FETCH_ALL_CATEGORIES
)();

export const fetchAllCategoriesError = createAction(
  constants.FETCH_ALL_CATEGORIES_ERROR,
  (error: Error) => error
)();

export default {
  fetchAllCategoriesSuccess,
  fetchAllCategories,
  fetchAllCategoriesError,
} as const;
