import React, { useState } from "react";
import Card from "./components/Card"

function App() {
  let data = [
    { name: "Pramod", position: "Senior Developer", image:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends:false },
    { name: "Muskan", position: "Junior Developer", image:"https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends:false },
    { name: "Nandini", position: "Intern", image:"https://media.istockphoto.com/id/1466601581/photo/portrait-of-a-thoughtful-young-casual-girl-wearing-a-brown-shirt-looking-aside-isolated-over.jpg?s=1024x1024&w=is&k=20&c=m890GryWUlg971cQ-QtgcHQdHfQ-bUYstCnBTq35Ik0=", friends:false },
    { name: "Prince", position: "UI Designer", image:"https://images.unsplash.com/photo-1677365492809-36819c3cd0f6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends:false }
  ];

  let [realData, setRealData] = useState(data);



  let handleFriendButton = (cardIndex) => {
    setRealData((previous) => {
     return previous.map((item, index) => {
        if (index === cardIndex) { 
          return {...item, friends: !item.friends}
        }
        return item;
      })
    })
  }




  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-3">
      {/* {data.map((item, index) => <Card name={item.name} position={item.position} image={item.image} />)} */}
      {realData.map((item, index) => <Card key={index} index={index} handleFriend={handleFriendButton} values={item} />)}
    </div>
  );
}


export default App;