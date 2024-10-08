import React, { useState } from "react"

function Card({values, handleFriend, index}) {

    let { name, position, image, friends } = values;
    

    return (
        <div className="w-52 bg-white rounded-md overflow-hidden">
            <div className="w-full h-32 bg-sky-300">
                <img className="w-full h-full object-cover" src={image} alt={name} />
            </div>
            <div className="w-full p-3">
                <h2 className="font-semibold text-lg">{ name }</h2>
                <h5 className="text-xs">{position}</h5>
                <button onClick={() => handleFriend(index)} className={`mt-3 px-2 py-1 ${friends ? 'bg-green-600' : 'bg-blue-500'} font-bold text-xs text-zinc-200 rounded-md`}>{friends ? "Added" : "Add Friend"}</button>
            </div>
        </div>
    )
}


export default Card;