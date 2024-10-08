import React, { useState } from "react";
import Navbar from './components/Navbar';
import Card from './components/Card';
function App() {

  let musicData = [
    { image: "https://wallpapercave.com/wp/wp6686740.jpg", name: "Alone II", artist: "Alan Walker", added: false },
    { image: "https://i.ytimg.com/vi/60ItHLz5WEA/maxresdefault.jpg", name: "Faded", artist: "Alan Walker", added: false },
    { image: "https://c.saavncdn.com/182/Arcade-English-2019-20190306171851-500x500.jpg", name: "Arcade", artist: "Duncan Laurence", added: false },
    { image: "https://i.ytimg.com/vi/IV0u_kiKY3E/maxresdefault.jpg", name: "Another Love", artist: "Tom Odell", added: false },
  ]

  let [data, setData] = useState(musicData);


  const handleClick = (index) => {

    setData((previous) => {
      return previous.map((item, itemIndex) => {
        if (itemIndex == index) {
          return { ...item, added: !item.added }
        }
        return item;
      })
    })

  };


  return (
    <>
      <div className="w-full h-screen bg-zinc-300">
        <Navbar data={data} />
        <div className="flex gap-10 flex-wrap items-center justify-center">
          {data.map((item, index) => (
            <Card value={item} handleClick={handleClick} index={index} />
          ))}
        </div>
      </div>

    </>
  )
}

export default App;