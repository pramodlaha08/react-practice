import React from "react";

function Card() {

    const data = [
        {
            image: 'https://images.unsplash.com/photo-1511296265581-c2450046447d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Google',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime ratione libero.',
            instock: true
        },
        {
            image: 'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Apple',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime ratione libero.',
            instock: false
        },
        {
            image: 'https://images.unsplash.com/photo-1587613842560-0816bd27a096?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Microsoft',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime ratione libero.',
            instock: false
        }
    ]
    return (
        <div className="w-full h-screen bg-zinc-200 flex items-center gap-10 justify-center">
            {data.map((item, index) => (
                <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
                <div className="w-full h-32 bg-zinc-300">
                    <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
                </div>
                <div className="w-full px-3 py-4 ">
                        <h1 className="font-semibold font-poppins">{ item.title}</h1>
                        <p className="text-xs mt-5 font-roboto">{item.description}</p>
                        <button className={`px-4 py-1 text-xs ${item.instock ? "bg-blue-600" : "bg-red-600"} text-zinc-200 rounded mt-3`}>{item.instock ? "In Stcok" : "Out Stock" }</button>
                        
                </div>
            </div>
           ))}
        </div>
    )
}

export default Card;