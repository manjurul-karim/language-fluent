import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className=" mx-auto bg-slate-300">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);

// max-w-screen-xl
