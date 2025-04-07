import axios from "axios";
import toast from "react-hot-toast";

// Base URL for the backend
const backendUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

// Function to get cookie by name
const getCookie = (name) => {
  const cookieMatch = document.cookie.match("(?:^|; )" + name + "=([^;]*)");
  return cookieMatch ? decodeURIComponent(cookieMatch[1]) : "";
};

// Create axios instance with credentials
const axiosApi = axios.create({
  baseURL: backendUrl,
  withCredentials: false,
});

// Helper function to set Authorization header
const setAuthHeader = () => {
  const token =
    getCookie(import.meta.env.VITE_TOKEN_NAME) ||
    sessionStorage.getItem(import.meta.env.VITE_TOKEN_NAME) ||
    localStorage.getItem(import.meta.env.VITE_TOKEN_NAME);
  if (token) {
    axiosApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosApi.defaults.headers.common["Authorization"];
  }
};

// Set the authorization token initially
setAuthHeader();

// Intercept requests to ensure the latest token is always used
axiosApi.interceptors.request.use(
  (config) => {
    setAuthHeader(); // Ensure the latest token is used in each request
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercept responses to handle errors globally
axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const errorMsg = error.response?.data?.message || "An error occurred";
    switch (status) {
      case 400:
        toast.error(`Bad Request: ${errorMsg}`);
        break;
      case 401:
        toast.error(`Unauthorized: ${errorMsg}`);
        localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
        window.location.href = "/login";
        break;
      case 403:
        toast.error(`Forbidden: ${errorMsg}`);
        break;
      case 404:
        toast.error("API not available (404)");
        break;
      case 405:
        toast.error("Data not available (405)");
        break;
      case 500:
        toast.error("Server Error (500)");
        break;
      case 502:
        toast.error("Bad Gateway (502)");
        break;
      case 503:
        toast.error("Service Unavailable (503)");
        break;
      case 504:
        toast.error("Gateway Timeout (504)");
        break;
      default:
        toast.error(`Unexpected Error (${status || "Unknown"}): ${errorMsg}`);
    }
    return Promise.reject(error);
  }
);

export { axiosApi, setAuthHeader };
