import React from "react";
import Routing from "../utility/Routing";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-full p-4 flex justify-center gap-10 bg-orange-300">
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "red" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "red" : "",
            };
          }}
          to="/user"
        >
          User
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "red" : "",
            };
          }}
          to="/about"
        >
          About
        </NavLink>
      </nav>
      <Routing />
    </>
  );
};

export default Navbar;
