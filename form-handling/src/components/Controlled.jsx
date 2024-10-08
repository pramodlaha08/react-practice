import React, { useState } from "react";

function Controlled() {
    const [val, setVal] = useState({ name: "", email: "" });
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(val)
    }

    return (
        <form className="mt-5 p-5" action="" onSubmit={handleSubmit} >
            <input  onChange={(e)=>setVal({...val, name:e.target.value})} placeholder="Enter name" type="text" />
            <input  onChange={(e)=>setVal({...val, email:e.target.value})} placeholder="Enter name" type="text" />
            <input type="submit" />
        </form>
    )
}


export default Controlled;