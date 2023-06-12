import { useMemory } from "../../contexts/MemoryContext"

const Score = () => {
  const { numbersCardsFlipped, score } = useMemory() 
  
  return (
    <div className="flex justify-between mb-1">
      <Points titulo="Score" value={score} />
      <Points titulo="Card Flipped" value={numbersCardsFlipped} />
    </div>
  )
}

const Points = ({titulo, value}) => {
  return (
    <div className="">
      <strong>{titulo}:</strong>
      <span className="ml-2">{value}</span>
    </div>
  )
}

export default Score
