import express from "express";
import {
  getUsers,
  getUserByID,
  getReviews,
  getReviewByID,
} from "../api/controllers";

const router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUserByID);

router.get("/reviews", getReviews);

router.get("/reviews/:id", getReviewByID);

export default router;
