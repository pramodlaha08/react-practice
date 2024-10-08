import React, { useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

const Context = (props) => {
  const [users, setUsers] = useState([
    {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      age: 28,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      age: 25,
    }
  ])
  return (
    <UserContext.Provider value={{users, setUsers}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;