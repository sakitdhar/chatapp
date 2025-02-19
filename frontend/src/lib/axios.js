import axios from "axios";

<<<<<<< HEAD
// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";
=======
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";
>>>>>>> b7736d957433180cf4cc5abe9ebe53f33fd9c00c

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
  
  withCredentials: true,  // Ensures cookies & sessions are sent
});
