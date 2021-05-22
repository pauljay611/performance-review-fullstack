import { Request, Response, NextFunction } from "express";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../../services/user";
import { SECRET, BCRYPT_HASH } from "../../configs";
import { parseAuthHeader } from "../../utils";

export const getUsers = async (
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
    // only admin can see other users
    const authHeader = req.headers.authorization;
    const decodeToken = parseAuthHeader(authHeader);
    const users = await User.getDataByID(+req.params.id);
    const isAdmin = users.get("is_admin");
    if (!isAdmin && decodeToken["id"] !== +req.params.id) {
      return res.status(403).send("forbidden");
    }

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
    const user = await User.getDataByUsername(username);
    if (!user) {
      return res
        .status(400)
        .json({ message: "Username or password does not match!" });
    }
    const hashedPassword = user.get("password") as string;
    const isCorrectPassword = await bcrypt.compare(password, hashedPassword);
    if (!isCorrectPassword) {
      return res
        .status(400)
        .json({ message: "Username or password does not match!" });
    }
    const jwtToken = jsonwebtoken.sign(
      { id: user.get("id"), name: user.get("name") },
      SECRET
    );

    const oneDayToSeconds = 24 * 60 * 60;
    res.cookie("token", jwtToken, {
      maxAge: oneDayToSeconds,
      httpOnly: true,
      // Forces to use https in production
      secure: process.env.NODE_ENV === "production" ? true : false,
    });

    res.status(200).json({ message: "Success", token: jwtToken });
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
    const { username, password, name, user_id, is_admin, id } = req.body;
    const hasUser = await User.getDataByUsername(username);
    if (hasUser) {
      return res.status(401).json({ message: "Username is already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_HASH);

    const newUser = await User.setData({
      id,
      username,
      password: hashedPassword,
      name,
      user_id,
      is_admin,
    });

    const jwtToken = jsonwebtoken.sign(
      { id: newUser.get("id"), name: newUser.get("name") },
      SECRET
    );

    res.status(200).json({ message: "Success", token: jwtToken });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const updateUserByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const userParams = req.body;
    const user = await User.updateDataByID(+id, userParams);
    res.status(200).json({ message: user[0] ? "update" : "no update" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const deleteUserByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await User.deleteDataByID(+id);
    res.status(200).json(user);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};
