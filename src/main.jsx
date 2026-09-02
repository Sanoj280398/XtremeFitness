import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Backoffice from "./pages/Backoffice.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import SubscriptionsPage from "./pages/SubscriptionsPage.jsx";
import EmployeesPage from "./pages/EmployeesPage.jsx";
import ReviewsPage from "./pages/ReviewsPage.jsx";
import MessagesPage from "./pages/MessagesPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import ExercisesPage from "./pages/ExercisesPage.jsx";
import MyPage from "./pages/MyPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Adminomraade, kun tilgaengeligt via login */}
        <Route path="/backoffice/*" element={<Backoffice />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
