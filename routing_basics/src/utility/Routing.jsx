import React from 'react';
import {Route, Routes } from "react-router-dom";
import Home from '../components/Home';
import User from '../components/User';
import About from '../components/About';
import Notfound from '../components/Notfound';

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
  );
};

export default Routing;