import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchAllCategories } from "../store/categories/actions";

export const useCategory = () => {
  const [currentCategoryID, setCurrentCategoryID] = useState<string>();

  const { categories, loading } = useSelector(
    (state: RootState) => state.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  useEffect(() => {
    if (categories.length === 0) return;
    setCurrentCategoryID(categories[0].ID);
  }, [categories]);

  return {
    currentCategoryID,
    setCurrentCategoryID,
    categories,
    loading,
  } as const;
};
