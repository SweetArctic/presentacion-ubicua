// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import PresentationIntro from "./PresentationIntro";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Intro con integrantes y tema */}
        <Route path="/intro" element={<PresentationIntro />} />
        
        {/* Presentación principal */}
        <Route path="/app" element={<App />} />

        {/* Iniciar SIEMPRE en App */}
        <Route path="/" element={<Navigate to="/app" replace />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/app" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
