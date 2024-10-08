import { React, useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";
function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };

  const handleRemove = (id) => {
    setUsers(()=> users.filter((user, index)=> index != id))
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-zinc-200">
      <div className="mx-auto w-[90%]">
        <Cards handleRemove={handleRemove} users={users} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
}

export default App;
