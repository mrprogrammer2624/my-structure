import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "@/axiosApi/ApiHelper";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import CryptoJS from "crypto-js";
import { setAuthHeader } from "@/axiosApi";

export const useLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("dhairydobaryia@gmail.com");
  const [password, setPassword] = useState("123456");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Utility: Encrypt data with JWT token
  const encryptData = (data, key) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
  };

  // Utility: Decrypt data with JWT token
  const decryptData = (cipherText) => {
    try {
      const bytes = CryptoJS.AES.decrypt(
        cipherText,
        import.meta.env.VITE_SECRET_KEY
      );
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {
      console.error("Decryption failed:", error);
      return null;
    }
  };

  // Load saved credentials on mount
  useEffect(() => {
    const savedCredentials = localStorage.getItem("rememberMe");

    if (savedCredentials) {
      const decryptedCredentials = decryptData(savedCredentials);
      if (decryptedCredentials) {
        setEmail(decryptedCredentials.email);
        setPassword(decryptedCredentials.password);
        setRememberMe(true);
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await login({ email, password });
      toast.success(response.message);

      const token = response.data;
      const decoded = jwtDecode(token);
      const { role } = decoded.userData;

      if (token) {
        Cookies.set(import.meta.env.VITE_TOKEN_NAME, token, {
          path: `/`,
          expires: 7,
          secure: process.env.NODE_ENV === "production",
        });
        setAuthHeader(token);
      }

      if (rememberMe) {
        const encryptedCredentials = encryptData(
          { email, password },
          import.meta.env.VITE_SECRET_KEY
        );
        localStorage.setItem("rememberMe", encryptedCredentials);
      } else {
        localStorage.removeItem("rememberMe");
      }

      // Redirect to role-based route
      if (role === "admin") navigate("/admin");
      else if (role === "doctor") navigate("/doctor");
      else if (role === "patient") navigate("/patient");
      else if (role === "receptionist") navigate("/reception");
      else {
        toast.error("Unauthorized role. Please contact support.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    isLoading,
    location,
    handleSubmit,
  };
};
