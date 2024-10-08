import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import About from "../components/About";
import Userdetails from "../components/Userdetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/user/:id" element={<Userdetails />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default Routing;