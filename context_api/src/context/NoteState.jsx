import React from "react";
import NoteContext from "./NoteContext";



const NoteState = (props) => {

  
  const detail = {
    name: "Pramod",
    gf: "Muskan",
  };
  return (
      <NoteContext.Provider value={ detail }>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
