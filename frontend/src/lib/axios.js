import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://interview-backend-4ked.onrender.com/api",
  // ☝️ Ensure /api is at the end
  withCredentials: true,
  timeout: 60000,
});

// Debug ke liye
console.log("🔗 API Base URL:", axiosInstance.defaults.baseURL);

export default axiosInstance;