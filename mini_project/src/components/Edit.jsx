import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
    description: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const changeHandler = (e) => {
    setProduct({...product, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    setProduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  const addProductHandler = (e) => {
    e.preventDefault();
    if (
      product.image.trim().length < 5 ||
      product.title.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Every field must have at least 5 characters except price");
      return;
    } else {
      // const product = {
      //   id: nanoid(),
      //   image,
      //   title,
      //   category,
      //   price,
      //   description,
      // };
      // setProducts([...products, product]);
      // localStorage.setItem("products", JSON.stringify([...products, product]));
      // navigate("/");
    }

    const copyData = [...products];
    const pi = products.findIndex((p) => p.id == id);
    copyData[pi] = { ...products[pi], ...product };
    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate(-1);


    console.log(product);
  };

  return (
    <form
      onSubmit={addProductHandler}
      className="flex items-center flex-col p-[5%] w-full h-screen"
    >
      <h1 className="w-1/2 mb-5 text-3xl">Edit Product</h1>
      <input
        type="url"
        placeholder="image url"
        className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="image"
        onChange={changeHandler}
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="title"
        onChange={changeHandler}
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="cateory"
          className="text-xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          name="category"
        onChange={changeHandler}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          name="price"
        onChange={changeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
        className="text-xl resize-none bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="description"
        onChange={changeHandler}
        value={product && product.description}
        placeholder="decription"
      ></textarea>
      <div className="w-1/2">
        <button
          className="py-2 px-5 border rounded border-blue-200 text-blue-300"
          href="/create"
        >
          Modify Changes
        </button>
      </div>
    </form>
  );
};

export default Edit;
