import React, { useContext } from "react";
import Routing from "../utils/Routing";
import { ProductContext } from "../utils/Context";
import { NavLink, useLocation } from "react-router-dom";
import Loading from "./Loading";

const Navbar = () => {
  const [products] = useContext(ProductContext);
  let distinctCategory =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinctCategory = [...new Set(distinctCategory)];
  function color() {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  }
  const { search, pathname } = useLocation();

  return (
    <>
      <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
        <a
          className="py-2 px-5 border rounded border-blue-200 text-blue-300"
          href="/create"
        >
          Add New Product
        </a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl w-[80%] font-medium mb-3 whitespace-nowrap">
          Category Filter
        </h1>
        <div className="w-[80%]">
          {products ? (
            distinctCategory.map((category, index) => (
              <NavLink
                to={`/?category=${category}`}
                key={index}
                className="mb-3 flex items-center"
              >
                <span
                  style={{ backgroundColor: color() }} // Assuming color() is a function that returns a color
                  className="mr-2 w-4 h-4 rounded-full"
                ></span>
                {category}
              </NavLink>
            ))
          ) : (
            <Loading align={"start"} font={"2xl"} />
          )}
        </div>
        {(pathname != "/" || search.length > 0) && (
          <NavLink
            to="/"
            className="mt-5 py-2 px-5 border rounded border-blue-200 text-blue-300"
          >
            Home
          </NavLink>
        )}
      </nav>
      <Routing />
    </>
  );
};

export default Navbar;
