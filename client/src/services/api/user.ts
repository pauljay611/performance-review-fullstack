import { api } from "./config";
import { IUser } from "../../types";

interface LoginBody {
  username: string;
  password: string;
}

interface LoginRes {
  message: string;
  token: string;
}

export const loginAPI = (body: LoginBody) =>
  api.post<LoginRes>("/login", body).then((res) => {
    return res.data;
  });

export const getUsersAPI = () =>
  api.get<IUser[]>("/users").then((res) => {
    return res.data;
  });
