import { BPFooter, BPHeader } from "@/components";
import React from "react";
import { Outlet } from "react-router-dom";

export const WebLayout = () => {
  return (
    <div>
      <BPHeader />
      <main>
        <Outlet />
      </main>
      <BPFooter />
    </div>
  );
};
