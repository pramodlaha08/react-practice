import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

const Userdetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  const navigate =useNavigate();
  return (
    <div className="mt-10 flex flex-col gap-2">
      <h1 className="text-3xl font-bold bg-blue-200 text-red-900">
        {users[id - 1].name}
      </h1>
      <h1 className="text-xl font-semi text-red-900 opacity-80">
        {users[id - 1].email}
      </h1>
      <h1 className="text-base font-semi text-red-900 opacity-80">
        {users[id - 1].age}
      </h1>
      <button onClick={()=>navigate(-1)} className="px-3 py-2 bg-red-300 text-zinc-200 roundedn-full font-semibold text-base">Go back</button>
    </div>
  );
};

export default Userdetails;
