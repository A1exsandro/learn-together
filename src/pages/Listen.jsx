import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useFetch } from "../hooks/useFetch"

const Listen = () => {
  const { makedCards } = useFetch()
  const [endList, setEndList] = useState([])

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
 
  return (
    <div className="flex flex-col items-center ">
      <h1>Listen</h1>

      <div className="grid grid-cols-3 gap-4 p-4 w-full">
        {
          endList.map((item, i) => (
            <div 
              className="bg-white text-center rounded-xl"
              key={i}
            >
              {item.nameImg}
            </div>
          ))
        } 
      </div> 

      <audio  src={makedCards[0].urlSound} controls />
    </div>
  )
}

export default Listen
