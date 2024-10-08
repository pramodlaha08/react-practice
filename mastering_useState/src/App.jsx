import { React, useState } from "react";

function App() {

  const [val, setVal] = useState([
    { name: 'pramod', age: 23 },
    { name: 'muskan', age: 24 },
    { name: 'Ayesha', age: 25 }
  ]);

  const [ans, setAns] = useState(false);


  return (
    <div className="p-5">

      <div>
        {val.map(item => <div>
          <h1>{item.name}</h1>
          <h1>{item.age}</h1>
        </div>)}
        <button onClick={() => setVal(() => val.map(item => item.name === "muskan" ? { name: "muskan", age: 26 } : item))} className="px-2 py-1 text-xs text-zinc-200 bg-blue-400 font-semibold rounded-full">Click</button>
      </div>

      <div className="mt-8">
        <h1>{ ans === false ? "False" : "True" }</h1>
        <button onClick={()=>setAns(()=>!ans)} className="px-2 py-1 text-xs text-zinc-200 bg-blue-400 font-semibold rounded-full">Click</button>
      </div>
    </div>

  );

}

export default App;