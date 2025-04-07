import React from "react";
import { RouterProvider } from "react-router-dom";
import BoilerPlateRoute from "./routes";
import { Suspense } from "react";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <Suspense fallback={"<BPLoader />"}>
        <RouterProvider router={BoilerPlateRoute} />
      </Suspense>
    </>
  );
}

export default App;
