import { createReducer } from "typesafe-actions";
import { CategoryState, CategoriesActionsType } from "./types";
import actions from "./actions";

const initialState: CategoryState = {
  categories: [],
  loading: false,
};

const reducer = createReducer<CategoryState, CategoriesActionsType>(
  initialState
)
  .handleAction(actions.fetchAllCategoriesSuccess, (_, actions) => ({
    categories: actions.payload,
    loading: false,
  }))
  .handleAction(actions.fetchAllCategories, (state) => {
    return { categories: state.categories, loading: true };
  })
  .handleAction(actions.fetchAllCategoriesError, (_, actions) => {
    return { categories: [], loading: false, error: actions.payload };
  });

export default reducer;
