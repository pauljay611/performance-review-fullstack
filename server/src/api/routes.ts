import express from "express";
import passport from "passport";

import {
  getUsers,
  getUserByID,
  updateUserByID,
  deleteUserByID,
  getReviews,
  getReviewsByEmployeeID,
  updateReviewByID,
  deleteReviewByID,
  createReview,
  createUser,
  login,
  getReviewsByReviewerID,
} from "../api/controllers";

import checkAdminRole from "../auth/checkAdminRole";

const router = express.Router();

router.post("/login", login);

// User
// Admin: CRUD
router.get(
  "/users",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole,
  getUsers
);
router.get(
  "/users/:id",
  passport.authenticate("jwt", { session: false }),
  getUserByID
);
router.post(
  "/users",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole,
  createUser
);
router.patch(
  "/users/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole,
  updateUserByID
);
router.delete(
  "/users/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole,
  deleteUserByID
);

// Review
// Admin: CRUD
// Employee: R
// Reviewer: U
router.get(
  "/reviews",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole,
  getReviews
);
router.get(
  "/reviews/employees/:eID",
  passport.authenticate("jwt", { session: false }),
  getReviewsByEmployeeID
);
router.get(
  "/reviews/reviewers/:rID",
  passport.authenticate("jwt", { session: false }),
  getReviewsByReviewerID
);
router.post(
  "/reviews",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole,
  createReview
);
router.patch(
  "/reviews/:id",
  passport.authenticate("jwt", { session: false }),
  updateReviewByID
);
router.delete(
  "/reviews/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole,
  deleteReviewByID
);

export default router;
