import {
  findReviewsByEmployeeID,
  findReviews,
  findReviewByID,
  findReviewsByReviewerID,
  updateReviewsByID,
  deleteReviewsByID,
  createReview,
} from "../dao/review";
import { IReview } from "../types";

interface FindReviewsQuery {
  id?: number;
}
class Review {
  static async getAllData() {
    const reviews = await findReviews();
    return reviews;
  }
  static async getDataByEmployeeID(id: number) {
    const reviews = await findReviewsByEmployeeID(id);
    return reviews;
  }
  static async getDataByReviewerID(id: number) {
    const reviews = await findReviewsByReviewerID(id);
    return reviews;
  }
  static async getDataByID(id: number) {
    const reviews = await findReviewByID(id);
    return reviews;
  }
  static async setReview(reviewParams: IReview) {
    const reviews = await createReview(reviewParams);
    return reviews;
  }
  static async updateDataByID(id: number, reviewParams: IReview) {
    const reviews = await updateReviewsByID(id, reviewParams);
    return reviews;
  }
  static async deleteDataByID(id: number) {
    const reviews = await deleteReviewsByID(id);
    return reviews;
  }
}

export default Review;
