import React, { useRef } from "react";


function Useref() {

  const name = useRef(null);
  const age = useRef(null);
  const gfname = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name.current.value, age.current.value);
  }

  const handleSubmitGF = (e) => {
    e.preventDefault();
    console.log(`Your gf name is: ${gfname.current.value}`);
  }


  return (
    <>
      <form className="p-5" action="" onSubmit={handleSubmit}>
        <input ref={name} placeholder="Enter name" type="text" />
        <input ref={age} placeholder="Enter age" type="text" />
        <input type="submit" />
      </form>

      <form className="mt-5 p-5" action="" onSubmit={handleSubmitGF}>
        <input ref={gfname} placeholder="Enter Girlfriend Name" type="text" />
        <input type="Submit" />
      </form>
    </>
  )
}

export default Useref;