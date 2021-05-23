import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import {
  fetchAllReviews,
  fetchEmployeesReviews,
  fetchReviewersReviews,
} from "../store/reviews/actions";

interface Params {
  eid?: number;
  rid?: number;
}

export const useReviews = ({ eid, rid }: Params) => {
  const { reviews, loading, error } = useSelector(
    (state: RootState) => state.review
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (eid) {
      dispatch(fetchEmployeesReviews({ id: eid }));
      return;
    }
    if (rid) {
      dispatch(fetchReviewersReviews({ id: rid }));
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
