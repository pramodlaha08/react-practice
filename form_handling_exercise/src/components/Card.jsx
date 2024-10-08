import React from "react";

function Card({user, handleRemove, id}) {
  return (
    <div className="flex h-full w-52 flex-col items-center rounded-md bg-zinc-100 p-2">
      <div className="image h-[3vw] w-[3vw] overflow-hidden rounded-full bg-zinc-200">
        <img className="w-full h-full object-cover" src={user.image} alt="" />
      </div>
      <h1 className="mt-1 text-xl font-semibold text-center">{user.name}</h1>
      <h4 className="text-xs font-semibold tracking-tighter opacity-50">
        {user.email}
      </h4>
      <p className="leading-1 mt-2 text-center text-xs font-semibold tracking-tight">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam facere
        praesentium eligendi.
      </p>
      <button onClick={()=>handleRemove(id)} className="mt-2 rounded-lg bg-red-400 px-3 py-1 text-xs font-semibold text-white">
        Remove it
      </button>
    </div>
  );
}

export default Card;
