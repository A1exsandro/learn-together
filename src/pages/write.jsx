import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useFetch } from "../hooks/useFetch"

const Write = () => {
  const { makedCards } = useFetch()
  const [endList, setEndList] = useState([])
  const [answer, setAnswer] = useState(0)

  const randomNumber = Math.floor(Math.random() * 6)
  console.log(makedCards[randomNumber].nameImg)

  useEffect(() => {
    const shuffleCards = (list = []) => {
      const smallList = [{}]

      for (let i = 0; i < 5; i++) { 
        smallList[i] = list[i] 
      }

      return smallList
    }
  
    setEndList(shuffleCards(makedCards))
  },[])

  // EXERCISE LOGIC
  const handleClick = (item) => {
    console.log(item.nameImg)
    if (item.nameImg === makedCards[randomNumber].nameImg) {
      setAnswer(1)
    } else {
      setAnswer(-1)
    }

  }
 
  return (
    <div className="flex flex-col items-center ">
      <h1>Write</h1>

      <div className="grid grid-cols-3 gap-4 p-4 w-full">
        {
          endList.map((item, i) => (
            <div 
              onClick={() => handleClick(item)}
              className="bg-white text-center rounded-xl"
              key={i}
            >
              {item.nameImg}
            </div>
          ))
        } 
      </div> 

      <audio  src={makedCards[randomNumber].urlSound} controls />

      {
        answer >= 0 ? ( answer === 0 ? 
          <div className="bg-orange-500 p-4 rounded-xl mt-4 font-bold">Listen and write the correct word</div> :
          <div className="bg-green-500 p-4 rounded-xl mt-4 font-bold">Great Job</div>
        ) : (
          <div className="bg-red-500 p-4 rounded-xl font-bold mt-4 text-white">Try Again</div>
        )
      }
    </div>
  )
}

export default Write
        