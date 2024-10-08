import { React, useState } from "react";

function App() {

  let [num, setNum] = useState(10);
  let [val, setVal] = useState({
    name: "Pramod",
    isBanned: false
  });

  let [detail, setDetail] = useState({
    name: "Pramod",
    feeling: "Hidden",
    gf: "None",
    love: "No Love"
  })

  function increaseNumber() {
    setNum(num + 5);
  }

  function mulitplyNumber() {
    setNum(num * 5);
  }

  return (
    <>
      <div className="h-screen w-auto flex items-center justify-evenly bg-zinc-300">
        <div className="w-[30%] px-2 py-2 border-gray-500 border-2 flex flex-col items-center justify-center">
          <h1 className="text-lg font-bold">{num}</h1>
          <button onClick={increaseNumber} className="px-3 py-2 bg-blue-400 text-zinc-200 w-32 mt-3 rounded-md block">Increase by 5</button>
          <button onClick={mulitplyNumber} className="px-3 py-2 bg-blue-400 text-zinc-200 w-32 mt-3 rounded-md block">Multiply by 5</button>
          <button onClick={() => setNum((prev)=> prev - 5)} className="px-3 py-2 bg-blue-400 text-zinc-200 w-32 mt-3 rounded-md block">Subtract by 5</button>
          <button onClick={()=> setNum((prev)=>prev/5)} className="px-3 py-2 bg-blue-400 text-zinc-200 w-32 mt-3 rounded-md">Divide by 5</button>
        </div>
        <div className="w-[30%] px-2 py-2 border-gray-500 border-2 flex flex-col items-center justify-center">
          <h1 className="xt-lg font-bold">Name: { val.name}</h1>
          <h1 className="xt-lg font-bold">Banned: {val.isBanned.toString()}</h1>
          <button onClick={()=> setVal({...val,isBanned: !val.isBanned})} className={`px-3 py-2 ${val.isBanned ? "bg-blue-400" : "bg-red-500"} text-zinc-200 w-32 mt-3 rounded-md block`}>{ val.isBanned ? "Unban" : "Ban"}</button>
        </div>

        <div className="w-[30%] px-2 py-2 border-gray-500 border-2 flex flex-col items-center justify-center">
          <div className="xt-lg font-bold">Name: <span className="font-normal">{ detail.name}</span></div>
          <div className="xt-lg font-bold">Feeling: <span className="font-normal">{detail.feeling}</span></div>
          <div className="xt-lg font-bold">Girlfriend: <span className="font-normal">{detail.gf}</span></div>
          <div className="xt-lg font-bold">Love Type: <span className="font-normal">{detail.love}</span></div>
          <button onClick={() => setDetail({ ...detail, feeling: "in love" })} className="px-3 py-2 bg-blue-400 text-zinc-200 w-[9rem] mt-3 rounded-md block">{ detail.feeling == "Hidden" ? "Show Feeling" : "Showed"}</button>
          <button onClick={() => setDetail({ ...detail, gf: "Still Noone" })} className="px-3 py-2 bg-blue-400 text-zinc-200 w-[9rem] mt-3 rounded-md block">{detail.gf == "None" ? "Reveal Girlfriend" : "Revealed"}</button>
          <button onClick={()=>setDetail({...detail, love: "True Love"})} className="px-3 py-2 bg-blue-400 text-zinc-200 w-[9rem] mt-3 rounded-md block">{detail.love =="No Love" ?"Show Love" : "Showed"}</button>

        </div>

      </div>
    </>
  )
}

export default App;