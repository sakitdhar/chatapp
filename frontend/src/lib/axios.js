import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL + "/api",
  withCredentials: true,  // Ensures cookies & sessions are sent
});
