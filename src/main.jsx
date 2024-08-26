import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/system";
import { SpeedInsights } from "@vercel/speed-insights/next";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </StrictMode>
);
