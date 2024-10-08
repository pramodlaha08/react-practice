import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Show from "../components/Show";
import Services from "../components/Services";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/show" element={<Show />}></Route>
      <Route path="/services" element={<Services />}></Route>
    </Routes>
  );
};

export default Routing;
