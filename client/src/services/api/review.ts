import { api } from "./config";
import { IReview } from "../../types";

export const getReviewsAPI = () =>
  api.get<IReview[]>("/reviews").then((res) => {
    return res.data;
  });

export const getReviewAPI = (id: number) =>
  api.get<IReview>(`/reviews/${id}`).then((res) => {
    return res.data;
  });

export const addReviewAPI = (body: Omit<IReview, "id">) =>
  api.post<IReview>(`/reviews`, body).then((res) => {
    return res.data;
  });

export const updateReviewAPI = (id: number, body: Omit<IReview, "id">) =>
  api.patch<IReview>(`/reviews/${id}`, body).then((res) => {
    return res.data;
  });

export const deleteReviewAPI = (id: number) =>
  api.delete<IReview>(`/reviews/${id}`).then((res) => {
    return res.data;
  });
