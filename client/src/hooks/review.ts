import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import { fetchAllReviews } from "../store/reviews/actions";

export const useReviews = () => {
  const { reviews, loading, error } = useSelector(
    (state: RootState) => state.review
  );
  const dispatch = useDispatch();
  console.log(reviews);
  useEffect(() => {
    dispatch(fetchAllReviews());
  }, [dispatch]);

  return {
    reviews,
    loading,
    error,
  } as const;
};
