import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchAllStores } from "../store/stores/actions";
import { IStoresPayload } from "../types";

export const useStores = (payload: IStoresPayload) => {
  const { stores, loading } = useSelector((state: RootState) => state.store);
  const dispatch = useDispatch();
  useEffect(() => {
    if (payload.location && payload.range && payload.category && !loading) {
      dispatch(fetchAllStores(payload));
    }
  }, [payload.location, payload.range, payload.category]);

  return { stores, loading } as const;
};
