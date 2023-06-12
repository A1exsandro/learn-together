import React, { useEffect } from "react"
import Card from "../components/memory-game/Card"
import Result from "../components/memory-game/Result"
import Score from "../components/memory-game/Score" 
import { useMemory } from "../contexts/MemoryContext"

const MemoryGame = () => {
  const { cards, startGame } = useMemory()

  useEffect(() => {
    startGame()
  }, [])

  return( 
    <div className="p-2">
      <h1>Memory Game</h1>
      <Score />

      <div className="grid grid-cols-4 gap-2">
        {
          cards.map((card) => (
            <Card key={card.id} {...card} />
          ))
        }
      </div>

      <Result />
    </div> 
  )
}

export default MemoryGame
