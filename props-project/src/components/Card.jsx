import React from "react";

function Card({ value, handleClick, index }) {

    let { image, name, artist, added } = value;

    return (
        <div className="w-60 p-4 rounded-md bg-zinc-100 flex gap-4 pb-8 relative mt-10">
            <div className="w-20 h-20 bg-orange-500 rounded-md">
                <img className="w-full h-full object-cover" src={image} alt={name} />
            </div>
            <div>
                <h3 className="text-xl leading-none font-semibold">{name}</h3>
                <h6 className="text-sm">{artist}</h6>
            </div>
            <button onClick={()=>handleClick(index)} className={`px-2 py-2 ${added === false ? "bg-orange-500" : "bg-teal-700"} text-xs text-white font-semibold absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] rounded-full`}>{added === true ? "Added" : "Add to Favourites"}</button>
        </div>
    )
}


export default Card;