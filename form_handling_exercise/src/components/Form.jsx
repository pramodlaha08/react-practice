import React from 'react';
import { useForm } from "react-hook-form";

const Form = ({ handleFormSubmitData }) => {
  const { register, handleSubmit, reset } = useForm()
  
  const handleSubmitData = (data) => {
    handleFormSubmitData(data);
    reset();
  }



  return (
    <div className='mt-10 flex justify-center'>
      <form className='flex gap-10' action="" onSubmit={handleSubmit(handleSubmitData)}>
        <input {...register('name')} className='rounded-md px-3 py-2 text-base font-semibold outline-none placeholder:text-sm placeholder:font-normal' type="text" placeholder='Name' />
        <input {...register('email')} className='rounded-md px-3 py-2 text-base font-semibold outline-none placeholder:text-sm placeholder:font-normal' type="text" placeholder='Email' />
        <input {...register('image')} className='rounded-md px-3 py-2 text-base font-semibold outline-none placeholder:text-sm placeholder:font-normal' type="text" placeholder='Image URL' />
        <input  className='rounded-md px-5 py-1 bg-gray-400 text-zinc-100 font-semibold' type="submit" />
      </form>
    </div>
  );
};

export default Form;