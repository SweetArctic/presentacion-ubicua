import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import PresentationIntro from "./PresentationIntro";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Pantalla de presentación */}
        <Route path="/intro" element={<PresentationIntro />} />

        {/* Presentación principal */}
        <Route path="/app" element={<App />} />

        {/* La app debe iniciar en /app */}
        <Route path="/" element={<Navigate to="/app" replace />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/app" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
