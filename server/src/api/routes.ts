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
} from "../api/controllers";

import checkAdminRole from "../auth/checkAdminRole";

const router = express.Router();

router.post("/login", login);

// User
// Admin: CRUD

router.post(
  "/user",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole(true),
  createUser
);
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
router.patch(
  "/users",
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
router.post(
  "/review",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole(true),
  createReview
);
router.get(
  "/reviews",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole(true),
  getReviews
);
router.get(
  "/reviews/:eID",
  passport.authenticate("jwt", { session: false }),
  checkAdminRole(false),
  getReviewsByEmployeeID
);
router.patch(
  "/reviews",
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
