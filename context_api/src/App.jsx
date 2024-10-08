import React from "react";
import Home from "./components/Home";
import { NavLink, Route, Routes } from "react-router-dom";
import User from "./components/User";
import About from "./components/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-1/2 mx-auto p-1">
     <Navbar />
    </div>
  );
};

export default App;
