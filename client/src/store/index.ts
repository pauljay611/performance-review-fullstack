import {
  CombinedState,
  combineReducers,
  StateFromReducersMapObject,
  compose,
} from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { createStore, applyMiddleware } from "redux";

import { getAllStoresEpic } from "./stores/epics";
import { getAllCouponsEpic } from "./coupons/epics";
import { getAllCategoriesEpic } from "./categories/epics";

import storeReducer from "./stores/reducers";
import couponReducer from "./coupons/reducers";
import categoryReducer from "./categories/reducers";

import { StoreActionsType } from "./stores/types";
import { CouponsActionsType } from "./coupons/types";
import { CategoriesActionsType } from "./categories/types";

import * as API from "../services/api";

export type RootState = CombinedState<
  StateFromReducersMapObject<typeof reducers>
>;

type ActionsType =
  | StoreActionsType
  | CouponsActionsType
  | CategoriesActionsType;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const reducers = {
  store: storeReducer,
  coupon: couponReducer,
  category: categoryReducer,
};

const epicMiddleware = createEpicMiddleware<
  ActionsType,
  ActionsType,
  RootState
>({ dependencies: API });

const rootReducer = combineReducers(reducers);

const rootEpic = combineEpics(
  getAllStoresEpic,
  getAllCouponsEpic,
  getAllCategoriesEpic
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [epicMiddleware];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store

  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore();

epicMiddleware.run(rootEpic);

export default store;
