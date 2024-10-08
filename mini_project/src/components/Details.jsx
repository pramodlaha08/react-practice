import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

const Details = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);

  useEffect(() => {
    if (products && products.length > 0 && !product) {
      const filteredProduct = products.filter((p) => p.id == id)[0];
      setProduct(filteredProduct);
    }
  }, [products, id]);

  const productDeleteHandler = (id) => {
    const filteredProduct = products.filter((p) => p.id != id)
    setProducts(filteredProduct);
    localStorage.setItem("products", JSON.stringify(filteredProduct))
    navigate("/");
  }

  return product ? (
    <div className="w-[80%] h-full m-auto p-[10%] flex justify-between items-center">
      <img
        className="h-[80%] w-[47%] object-contain p-4"
        src={product.image}
        alt={product.title}
      />
      <div className="contect w-1/2">
        <h1 className="text-3xl leading-tight font-bold">
          {product.title}
        </h1>
        <h2 className="text-sm text-slate-400 w-fit">{product.category}</h2>
        <h3 className="text-gray-800 font-semibold text-xl my-4">{ `$${product.price}` }</h3>
        <p className="text-zinc-500 text-base font-normal italic mb-7">
          {product.description}
        </p>
        <Link to={`/edit/${product.id}`} className="py-2 px-5 border rounded border-blue-200 text-blue-300 mr-4">
          Edit
        </Link>
        <button onClick={()=>productDeleteHandler(product.id)} className="py-2 px-5 border rounded border-red-200 text-red-300">
          Delete
        </button >
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
