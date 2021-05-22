import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchAllReviews } from "../store/reviews/actions";

export const useReview = (reviewID?: number) => {
  const { reviews, loading } = useSelector((state: RootState) => state.review);
  const dispatch = useDispatch();

  const getReviews = useCallback((reviewID: number) => {
    dispatch(fetchAllReviews());
  }, []);

  useEffect(() => {
    if (!reviewID) return;
    getReviews(reviewID);
  }, [reviewID]);

  return { reviews, getReviews, loading } as const;
};
