import React from "react";

function Card() {

    let data = [
        {
            name: 'Mahiya Ve',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, ratione!',
            available: true,
        },
        {
            name: 'Sajni re',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, ratione!',
            available: false,
        },
        {
            name: 'Humdard',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, ratione!',
            available: false,
        }
    ];
    let handleClick = (boolen) => {
        if (boolen.available) {
            alert('Downloading...');
        }

        else {
            alert('Data Missing');
        }
    };

    let handleOver = () => {
        alert('you hovered me!');
    };

    return (
        <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center">
            {data.map((item, index) => (
                <div className="w-90 px-3 py-2 bg-zinc-100 rounded-md">
                    <h3 className="font-semibold text-xl">{item.name}</h3>
                    <p className="text-xs mt-2">{item.description}</p>
                    <button className={`px-2 py-1 text-xs ${item.available ? " bg-blue-500" : "bg-red-500"} mt-3 text-zinc-100 rounded`}>{item.available ? "Download Now" : "Data Missing"}</button>
                </div>
            ))}
        </div>
    )
}

export default Card;