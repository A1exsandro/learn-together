import { useMemory } from "../../contexts/MemoryContext"

const Card = ({ id, idBoth, cardName}) => {
  const { showCard, idsFlippedCards, idFoundPairsCards } = useMemory()

  const handleClick = () => {
    showCard({ id, idBoth })
  } 

  const flipped = idsFlippedCards.includes(id) || idFoundPairsCards.includes(idBoth) 
  
  return (
    <div className="" id={id} onClick={handleClick}>
      <div 
        className={`aspect-[3/4] card-container  ${flipped ? '' : 'rotateY'}`}
      >
        
        {/* FRONT OF CARD */}
        <div className="flex justify-center items-center flip rotateY rounded-xl
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h1 className=""></h1>
        </div>

        {/* BACK OF CARD */}
        <div className="flex justify-center items-center bg-red-400 flip backface-none rounded-xl">
          <h1 className="">{cardName}</h1>
        </div>

      </div>
    </div>
  )
}

export default Card
