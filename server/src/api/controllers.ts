import { Request, Response, NextFunction } from "express";
import jsonwebtoken from 'jsonwebtoken'
import bcrypt from 'bcrypt';

import Review from "../services/review";
import User from "../services/user";
import { SECRET, BCRYPT_HASH } from "../configs";

export const getReviews = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reviews = await Review.getAllData(req.query);
    res.status(200).json(reviews);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const getReviewByID = async (
  req: Request<{ id: number }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const reviews = await Review.getDataByID(+req.params.id);
    res.status(200).json(reviews);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const getUsers= async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.getAllData();
    res.status(200).json(users);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const getUserByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.getDataByID(+req.params.id);
    res.status(200).json(users);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;
    const user = await User.getDataByUsername(username)
    if(!user){
      return res.status(400).json({ message: "Email or password does not match!" });
    }
    const hashedPassword = user.get('password') as string
    const isCorrectPassword = await bcrypt.compare(password, hashedPassword)
    if(!isCorrectPassword){
      return res.status(400).json({ message: "Email or password does not match!" });
    }
    const jwtToken = jsonwebtoken.sign(
      { id: user.get('id'), name: user.get('name') },
      SECRET
    );

    res.status(200).json({message: 'Success', token: jwtToken});
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password, name, user_id, is_admin } = req.body;
    const hasUser = await User.getDataByUsername(username)
    if(hasUser){
      return res.status(401).json({ message: 'Username is already exist' });
    }


    const hashedPassword = await bcrypt.hash(password, BCRYPT_HASH)

    const newUser = await User.setUser({ username, password: hashedPassword, name, user_id, is_admin })

    const jwtToken = jsonwebtoken.sign(
      { id: newUser.get('id'), name: newUser.get('name') },
      SECRET
    );

    res.status(200).json({message: 'Success', token: jwtToken});
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};