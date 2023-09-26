import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "../about-us/AboutUs";
import Home from "../home/Home";
import MainLayout from "./MainLayout";

const MainRoute = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mongol-world" element={<AboutUs />} />
        <Route path="/calendar" element={<AboutUs />} />
        <Route path="/news" element={<AboutUs />} />
        <Route path="/resources" element={<AboutUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </MainLayout>
  );
};

export default MainRoute;
