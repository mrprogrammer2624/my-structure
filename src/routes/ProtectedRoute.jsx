import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const tokenName = Cookies.get(import.meta.env.VITE_TOKEN_NAME);
  let token;
  if (tokenName) {
    token = jwtDecode(tokenName);
  }
  const userData = token?.userData;
  const role = userData?.role;

  useEffect(() => {
    if (!tokenName || !role) {
      navigate("/login");
    }

    if (location.pathname.startsWith("/admin") && role !== "admin") {
      navigate("/login");
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (role === "admin" && !location.pathname.startsWith("/admin")) {
      navigate("/admin");
    }
  }, [role]);

  return children;
}

export default ProtectedRoute;
