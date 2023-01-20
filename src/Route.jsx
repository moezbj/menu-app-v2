import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import DetailCategory from "./pages/DetailCategory";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/category/detail-category/:name" element={<DetailCategory />} />

    </Routes>
  );
};

export default RoutesPage;
