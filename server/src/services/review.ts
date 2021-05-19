import { findReivewByID, findReivewByQuery, findReivews } from "../dao/review";

interface FindReviewsQuery {
  id?: number;
}
class Review {
  static async getAllData(query: FindReviewsQuery) {
    if (!query.id) {
      const reviews = await findReivews();
      return reviews;
    }
    const reviews = await findReivewByQuery(query.id);
    return reviews;
  }
  static async getDataByID(id: number) {
    const reviews = await findReivewByID(id);
    return reviews;
  }
}

export default Review;
