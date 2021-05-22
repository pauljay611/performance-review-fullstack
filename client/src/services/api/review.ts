import { api } from "./config";
import { IReview } from "../../types";

export const getReviewsAPI = () =>
  api.get<IReview[]>("/reviews").then((res) => {
    return res.data;
  });
