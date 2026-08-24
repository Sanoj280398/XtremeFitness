import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Backoffice from "./pages/Backoffice.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Adminomraade, kun tilgaengeligt via login */}
        <Route path="/backoffice/*" element={<Backoffice />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
