import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Details from "../components/Details";
import Create from "../components/Create";
import Edit from "../components/Edit";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/details/:id" element={<Details />}></Route>
      <Route path="/edit/:id" element={<Edit />}></Route>
    </Routes>
  );
};

export default Routing;
