import axios from "axios";

// Create axios instance with base config
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Load from .env
  timeout: 10000, // optional timeout in ms
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
