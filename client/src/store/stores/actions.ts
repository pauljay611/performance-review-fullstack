import { createAction } from "typesafe-actions";
import { Error } from "../../services/api/types";
import { IStore, IStoresPayload } from "../../types";
import constants from "./constants";

export const fetchAllStoresSuccess = createAction(
  constants.FETCH_ALL_STORES_SUCCESS,
  (stores: IStore[]) => stores
)();

export const fetchAllStores = createAction(
  constants.FETCH_ALL_STORES,
  (payload: IStoresPayload) => payload
)();

export const fetchAllStoresError = createAction(
  constants.FETCH_ALL_STORES_ERROR,
  (error: Error) => error
)();

export default {
  fetchAllStoresSuccess,
  fetchAllStores,
  fetchAllStoresError,
} as const;
