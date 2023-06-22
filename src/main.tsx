import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routes/routes.tsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
