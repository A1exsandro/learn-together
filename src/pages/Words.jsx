import React, { useEffect, useState } from "react" 

import Loader from "../components/Loader"
import Card from "../components/Card" 
import { useMemory } from "../contexts/MemoryContext"

// const data = [
//   'butterfly',
//   'avocado',
//   'banana',
//   'bathroom',
//   'bedroom',
//   'breakfast',
//   'bridge',
//   'brothers', 
//   'closed',
//   'cook',
//   'dance',
//   'eat',
//   'fear',
//   'fire',
//   'film',
//   'fruits',
//   'kitchen',
//   'night',
//   'read',
//   'open',
//   'marketplace',
//   'play',
//   'smell',
//   'sleep',
//   'plant',
//   'tired'
// ] 

const Words = () => { 
  const { cards } = useMemory() 
 
  console.log(cards)
  //console.log('data', data)
 
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-2xl font-bold mt-4">Listen and Write</h1>
      <div 
        className="grid grid-cols-4 gap-4 p-4"
      >
      {
        ( cards.length > 0  &&
          cards.map((card, i) => (
            <Card key={i} {...card} />
          ))
        ) || 
        (
          <Loader />
        )
      }
      </div>
    </div>
  )
}

export default Words
