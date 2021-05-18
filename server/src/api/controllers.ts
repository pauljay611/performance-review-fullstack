import { Request, Response, NextFunction } from "express";
import Store from "../services/store";
import Coupon from "../services/coupon";
import Category from "../services/category";

export const getStores = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const stores = await Store.getAllData(req.query);
    res.status(200).json(stores);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const getStoreByID = async (
  req: Request<{ id: number }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const stores = await Store.getDataByID(+req.params.id);
    res.status(200).json(stores);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const getCoupons = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const coupons = await Coupon.getAllData(req.query);
    res.status(200).json(coupons);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const getCouponByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const coupons = await Coupon.getDataByID(+req.params.id);
    res.status(200).json(coupons);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await Category.getAllData();
    res.status(200).json(categories);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const getCategoryByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await Category.getDataByID(+req.params.id);
    res.status(200).json(categories);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};
