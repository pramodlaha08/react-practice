import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/Context";
import { Link } from "react-router-dom";
// import NoteContext from "../context/NoteContext";

const User = () => {
  // const {name, gf} = useContext(NoteContext);
  const { users, setUser } = useContext(UserContext);
  return (
    <div>
      <h1 className="text-3xl font-semibold">User List</h1>
      <div className="mt-10 flex flex-col gap-5">
        {users.map(u => <Link to={`/user/${u.id}`} key={u.id} className="bg-orange-300 p-3 w-1/2 rounded-md">My name is {u.name} and email is {u.email}</Link>)}
          
      </div>
    </div>
  );
};

export default User;
