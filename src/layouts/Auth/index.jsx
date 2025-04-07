import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Left side - Login Form */}
      <Outlet />

      {/* Right side - Image or Color */}
      <div className="hidden md:block md:w-1/2 bg-blue-600">
        {/* You can replace this div with an image if preferred */}
        <div className="h-full flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Welcome to Our App</h2>
        </div>
      </div>
    </div>
  );
};
