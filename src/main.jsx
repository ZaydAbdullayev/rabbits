import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./home.jsx";
import { Loader } from "./components/loader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Loader />
  </StrictMode>
);
