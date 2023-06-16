import React from "react"
import Card from "../components/memory-game/Card"
import Result from "../components/memory-game/Result"
import Score from "../components/memory-game/Score" 
import { useMemory } from "../contexts/MemoryContext"

const MemoryGame = () => { 
  const { cards, loading } = useMemory()  

  return( 
    <div className="p-2">
      <h1>Memory Game</h1>
      <Score />

      <div className="grid grid-cols-4 gap-2">
        { 
          loading ? (
            <div className="fixed text-center font-bold w-full">
              <p className="">Wait please, loading the cards...</p>
            </div>
          ) : (
            cards.map((card, i) => (
              <Card key={i} {...card} />
            ))
          ) 
        }
      </div>

      <Result />
    </div> 
  )
}

export default MemoryGame
