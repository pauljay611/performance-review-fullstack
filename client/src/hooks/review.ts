import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import {
  fetchAllReviews,
  fetchEmployeesReviews,
} from "../store/reviews/actions";

export const useReviews = (eid?: number) => {
  const { reviews, loading, error } = useSelector(
    (state: RootState) => state.review
  );
  const dispatch = useDispatch();
  console.log(eid);
  useEffect(() => {
    if (eid) {
      dispatch(fetchEmployeesReviews({ id: eid }));
      return;
    }
    dispatch(fetchAllReviews());
  }, [dispatch, eid]);

  return {
    reviews,
    loading,
    error,
  } as const;
};
