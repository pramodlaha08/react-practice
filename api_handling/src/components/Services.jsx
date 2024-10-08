import React, { useEffect, useState } from "react";
import axios from "../utility/axios";


const Services = () => {
  const [first, setFirst] = useState("This is normal data");
  const [second, setSecond] = useState("This is big data");
  function getUser() {
    axios
      .get("/users")
      .then((users) => {
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
      console.log("Services Component created");
      getUser();
    return () => {
      console.log("Services Component deleted");
    };
  }, [second]);

  return (
    <div className="p-5">
      <h1>{first}</h1>
      <button
        onClick={() => setFirst("Normal data updated")}
        className="px-3 py-2 bg-orange-400 mt-2 text-xs font-semibold text-white rounded-md"
      >
        Change first
      </button>
      <h1>{second}</h1>
      <button
        onClick={() => setSecond("Large data Updated")}
        className="px-3 py-2 bg-orange-400 mt-2 text-xs font-semibold text-white rounded-md"
      >
        Change Second
      </button>
    </div>
  );
};

export default Services;
