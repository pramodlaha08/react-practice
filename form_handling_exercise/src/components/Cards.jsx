import React from "react";
import Card from "./Card";

const Cards = ({ users, handleRemove }) => {
  return (
    <div className="flex max-h-96 w-full flex-wrap items-center justify-center gap-4 overflow-auto p-4">
      {users.map((item, index) => {
        return <Card handleRemove={handleRemove} id={index} key={index} user={item} />;
      })}
    </div>
  );
};

export default Cards;
