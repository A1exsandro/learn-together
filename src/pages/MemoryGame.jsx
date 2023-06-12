import React from "react"
import Card from "../components/memory-game/Card"
import Score from "../components/memory-game/Score"

const MemoryGame = () => {
  return(
    <div>
      <h1>Memory Game</h1>
      <Score />

      <div className="">
        <Card />
      </div>
    </div>
  )
}

export default MemoryGame
