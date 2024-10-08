import React from "react";
import { useForm } from "react-hook-form"

function Reacthook() {
    const { register, handleSubmit } = useForm();
    
    const displaySubmit = (data) => {
        console.log(data);
    }
    return (
        <form className="mt-5 p-5" action="" onSubmit={handleSubmit(displaySubmit)}>
            <input {...register('name')} type="text" placeholder="Name" />
            <input {...register('email')} type="text" placeholder="Email" />
            <input type="submit" />
        </form>
    )
}


export default Reacthook;