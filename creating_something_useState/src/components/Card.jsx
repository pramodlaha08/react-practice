import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Card() {
  let [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center">
      <div className="w-60 h-32 relative bg-zinc-500 rounded-md flex overflow-hidden">
        <img
          className={`shrink-0 transition-transform ease-in duration-500 ${
            val ? "-translate-x-[100%]" : "translate-x-[0%]"
          } w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1726533870778-8be51bf99bb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="nature image"
        />
        <img
          className={`shrink-0 transition-transform ease-in duration-500 ${
            val ? "-translate-x-[100%]" : "translate-x-[0%]"
          } w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="nature image"
        />
        <span
          onClick={() => setVal(() => !val)}
          className="w-8 h-8 bg-[#dadada7b] rounded-full flex items-center justify-center absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%] cursor-pointer"
        >
          {val ? (
            <FaArrowRight size={".8em"} color="black" />
          ) : (
            <FaArrowLeft size={".8em"} color="black" />
          )}
        </span>
      </div>
    </div>
  );
}

export default Card;
