import {
  CombinedState,
  combineReducers,
  StateFromReducersMapObject,
  compose,
} from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { createStore, applyMiddleware } from "redux";

import { getAllReviewsEpic } from "./reviews/epics";
import { getAllUsersEpic, getUserEpic } from "./users/epics";

import reviewsReducer from "./reviews/reducers";
import usersReducer from "./users/reducers";

import { ReviewsActionsType } from "./reviews/types";
import { UsersActionsType } from "./users/types";

import * as API from "../services/api";

export type RootState = CombinedState<
  StateFromReducersMapObject<typeof reducers>
>;

type ActionsType = ReviewsActionsType | UsersActionsType;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const reducers = {
  review: reviewsReducer,
  user: usersReducer,
};

const epicMiddleware = createEpicMiddleware<
  ActionsType,
  ActionsType,
  RootState
>({ dependencies: API });

const rootReducer = combineReducers(reducers);

const rootEpic = combineEpics(getAllReviewsEpic, getAllUsersEpic, getUserEpic);

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
