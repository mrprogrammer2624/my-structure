import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToasterProvider } from "./providers/Toaster.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToasterProvider />
  </StrictMode>
);
