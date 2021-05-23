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
  checkAdminRole(true),
  getUsers
);
router.get(
  "/users/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole(false),
  getUserByID
);
router.post(
  "/users",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole(true),
  createUser
);
router.patch(
  "/users/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole(true),
  updateUserByID
);
router.delete(
  "/users/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole(true),
  deleteUserByID
);

// Review
// Admin: CRUD
// Employee: R
// Reviewer: U
router.get(
  "/reviews",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole(true),
  getReviews
);
router.get(
  "/reviews/employees/:eID",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole(false),
  getReviewsByEmployeeID
);
router.get(
  "/reviews/reviewers/:rID",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole(false),
  getReviewsByReviewerID
);
router.post(
  "/reviews",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole(true),
  createReview
);
router.patch(
  "/reviews/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole(false),
  updateReviewByID
);
router.delete(
  "/reviews/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole(true),
  deleteReviewByID
);

export default router;
