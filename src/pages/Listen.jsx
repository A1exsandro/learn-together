import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useFetch } from "../hooks/useFetch"

const Listen = () => {
  const { makedCards } = useFetch()
  const [endList, setEndList] = useState([])
  //console.log( makedCards[0] )

  useEffect(() => {
    const shuffleCards = (list = []) => {
      const smallList = [{}]

      for (let i = 0; i < 5; i++) {
        console.log('antes', smallList)
        smallList[i] = list[i]
        console.log('teste de console', list[i])
      }

      return smallList
    }
  
    setEndList(shuffleCards(makedCards))
  },[])

  console.log('fora', endList)

  return (
    <div className="flex flex-col items-center ">
      <h1>Listen</h1>

      <div className="grid grid-cols-4 gap-4 p-4 w-full">
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

      <button className="bg-black text-white py-1 px-10 rounded-xl">
        Listen
      </button>
    </div>
  )
}

export default Listen
