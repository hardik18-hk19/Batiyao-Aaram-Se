import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8580/api",
  withCredentials: true,
});
