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

export const getUserAPI = (id: number) =>
  api.get<IUser>(`/users/${id}`).then((res) => {
    return res.data;
  });

export const addUserAPI = (body: Omit<IUser, "id">) =>
  api.post<IUser>(`/users`, body).then((res) => {
    return res.data;
  });

export const updateUserAPI = (id: number, body: Omit<IUser, "id">) =>
  api.patch<IUser>(`/users/${id}`, body).then((res) => {
    return res.data;
  });

export const deleteUserAPI = (id: number) =>
  api.delete<IUser>(`/users/${id}`).then((res) => {
    return res.data;
  });
