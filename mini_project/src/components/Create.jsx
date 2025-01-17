import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  let [products, setProducts] = useContext(ProductContext);
  const addProductHandler = (e) => {
    e.preventDefault();
    if (
      image.trim().length < 5 ||
      title.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Every field must have at least 5 characters except price");
      return;
    } else {
      const product = {
        id: nanoid(),
        image,
        title,
        category,
        price,
        description,
      };
      setProducts([...products, product]);
      localStorage.setItem("products", JSON.stringify([...products, product]));
      navigate("/");
    }
  };

  return (
    <form
      onSubmit={addProductHandler}
      className="flex items-center flex-col p-[5%] w-full h-screen"
    >
      <h1 className="w-1/2 mb-5 text-3xl">Add New Product</h1>
      <input
        type="url"
        placeholder="image url"
        className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="cateory"
          className="text-xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="text-xl bg-zinc-100 min-h-52 resize-none rounded p-3 w-1/2 mb-3"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="decription"
      ></textarea>
      <div className="w-1/2">
        <button
          className="py-2 px-5 border rounded border-blue-200 text-blue-300"
          href="/create"
        >
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
