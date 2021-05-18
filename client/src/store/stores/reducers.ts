import { createReducer } from "typesafe-actions";
import { StoreState, StoreActionsType } from "./types";
import actions from "./actions";

const initialState: StoreState = {
  stores: [],
  loading: false,
};

const reducer = createReducer<StoreState, StoreActionsType>(initialState)
  .handleAction(actions.fetchAllStoresSuccess, (_, actions) => ({
    stores: actions.payload,
    loading: false,
  }))
  .handleAction(actions.fetchAllStores, (state) => {
    return { stores: state.stores, loading: true };
  })
  .handleAction(actions.fetchAllStoresError, (_, actions) => {
    return { stores: [], loading: false, error: actions.payload };
  });

export default reducer;
