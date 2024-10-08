import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  let category = decodeURIComponent(search.split("=")[1]);
  const [filteredProducts, setFilteredProducts]=useState(null)

  // const getProductCategory = async() => {
  //   try {
  //     const { data } = await axios.get(`/products/category/${category}`)
  //     setFilteredProducts(data);
  //   } catch (error) {
  //     console.error(error);
      
  //   }
  // }

  useEffect(() => {
    if (!filteredProducts || category == 'undefined') setFilteredProducts(products)

    if (category != 'undefined') {
      setFilteredProducts(products.filter((p) => p.category == category))
    }
 
  },[category, products])

  return products ? (
    <>
      <div className="h-full flex-1 p-10 pt-[5%] flex flex-wrap gap-3 overflow-x-hidden overflow-y-auto">
        {filteredProducts && filteredProducts.map((product, index) => (
          <NavLink
            key={index}
            to={`/details/${product.id}`}
            className="p-3 border flex flex-col justify-center shadow rounded w-[18%] h-[30vh]"
          >
            <div
              className="mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center hover:scale-110"
              style={{
                backgroundImage: `url(${product.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-300">{product.title}</h1>
          </NavLink>
        ))}
      </div>
    </>
  ) : (
    <Loading align={"center"} font={"4xl"} />
  );
};

export default Home;
