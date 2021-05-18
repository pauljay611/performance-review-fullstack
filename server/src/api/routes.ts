import express from "express";
import {
  getCategories,
  getCoupons,
  getStores,
  getStoreByID,
} from "../api/controllers";

const router = express.Router();

router.get("/stores", getStores);
router.get("/store/:id", getStoreByID);

router.get("/coupons", getCoupons);

router.get("/categories", getCategories);

export default router;
