import React, { useEffect, useRef } from "react" 
import { useFetch } from "../hooks/useFetch";

const Listen = () => {
  const { makedCards } = useFetch()

  return (
    <div 
      className=" flex flex-col items-center"
    >
      <div className="bg-black text-white px-4 mb-3 rounded-xl">
        { makedCards.length} 
      </div>
       
      <div className="flex justify-center flex-wrap gap-3">
        { 
          makedCards.map((card, i) => ( 
            
            <div 
              key={i}  
              className="bg-white flex flex-col items-center w-20 h-30
              rounded-xl"
            >  
              <img 
                className="w-20 h-20 rounded-t-xl"
                src={card.urlImg} 
                alt={card.urlImg} 
              />

              <audio>
                <source src={card.urlSound} /> 
              </audio>

              <div className="">
                { card.nameImg}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Listen