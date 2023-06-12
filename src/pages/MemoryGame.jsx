import React from "react"
import Card from "../components/memory-game/Card"
import Score from "../components/memory-game/Score"
import { pairsOfCards } from "../constants/cards"

const MemoryGame = () => {
  return(
    <div className="p-2">
      <h1>Memory Game</h1>
      <Score />

      <div className="grid grid-cols-4 gap-2">
        {
          pairsOfCards.map((card) => (
            <Card key={card.id} {...card} />
          ))
        }
      </div>
    </div>
  )
}

export default MemoryGame
