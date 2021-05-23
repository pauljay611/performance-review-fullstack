import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: process.env.API_ENDPOINT,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  config.headers.Authorization = "Bearer " + token;
  return config;
});
