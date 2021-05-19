import express from "express";
import passport from "passport"

import {
  getUsers,
  getUserByID,
  getReviews,
  getReviewByID,
  login,
} from "../api/controllers";

import checkRoles from '../auth/checkRoles'

const router = express.Router();

router.post("/login", login);

router.get("/users", getUsers);
router.get("/user/:id", getUserByID);

router.get("/reviews", passport.authenticate("jwt", { session: false }), checkRoles(true), getReviews);

router.get("/reviews/:id", getReviewByID);

export default router;
