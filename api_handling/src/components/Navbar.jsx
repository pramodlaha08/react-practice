import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center gap-10 mb-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/show">Show</NavLink>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
