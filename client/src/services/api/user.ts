import { api } from "./config";
import { IUser } from "../../types";

export const getUsersAPI = () =>
  api.get<IUser[]>("/users").then((res) => {
    return res.data;
  });
