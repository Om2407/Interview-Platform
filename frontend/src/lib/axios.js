import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://interview-backend-4ked.onrender.com/api",
  withCredentials: true,
  timeout: 60000,
});

// Debug ke liye
console.log("🔗 API Base URL:", axiosInstance.defaults.baseURL);

// ✅ REQUEST INTERCEPTOR - Token add karne ke liye
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      // Clerk se session token get karo
      const clerkToken = await window.Clerk?.session?.getToken();
      
      if (clerkToken) {
        config.headers.Authorization = `Bearer ${clerkToken}`;
      }
    } catch (error) {
      console.error("Error getting Clerk token:", error);
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ RESPONSE INTERCEPTOR - Error handling ke liye
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized - Token might be invalid or expired");
      // Optionally redirect to login
      // window.location.href = '/sign-in';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "https://interview-backend-4ked.onrender.com/api",
//   // ☝️ Ensure /api is at the end
//   withCredentials: true,
//   timeout: 60000,
// });

// // Debug ke liye
// console.log("🔗 API Base URL:", axiosInstance.defaults.baseURL);

// export default axiosInstance;