import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import pageRoutes from "./Routes.tsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={pageRoutes} />
  </StrictMode>
);
