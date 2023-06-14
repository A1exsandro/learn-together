import React, { useRef } from "react" 
import { useMemory } from "../../contexts/MemoryContext" 

const Card = ({ id, idBoth, nameImg, urlImg, urlSound}) => {
  const { showCard, idsFlippedCards, idFoundPairsCards } = useMemory() 
  
  const audioRef = useRef(null) 

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  } 

  const handleClick = () => {
    playAudio()
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
          <audio ref={audioRef}>
            <source src={urlSound} /> 
          </audio>
        </div>

        {/* BACK OF CARD */}
        <div className="flex justify-center items-center bg-red-400 flip backface-none rounded-xl">
          {
            id === idBoth ? (
              <img 
                className="w-full h-full rounded-xl"
                src={urlImg} 
                alt={nameImg}
              /> 
            ) : (
              <div>{nameImg}</div>
            )
          }
        </div>

      </div>
    </div>
  )
}

export default Card
