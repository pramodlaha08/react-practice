import axios from "../utility/axios";
import React, { useEffect, useState } from "react";

const Show = () => {
  const [products, setProducts] = useState([]);
  function getData() {
    axios
      .get("/products")
      .then((products) => {
        setProducts(products.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
    console.log("Api called");
    return () => {
      console.log("Cleanup");
    };
  }, []);
  getData();
  return (
    <>
      <hr />
      {products.length > 0 ? (
        products.map((product, index) => (
          <li
            key={index}
            className="p-3 w-1-/2 bg-red-300 rounded-md mt-4 list-none"
          >
            {product.title}
          </li>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Show;
