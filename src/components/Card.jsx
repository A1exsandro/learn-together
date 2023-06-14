import React, { useRef, useState } from "react" 

const Card = ({ nameImg, urlImg, urlSound }) => {
  const [flipped, setFlipped] = useState(true)
  const audioRef = useRef(null)
  
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  } 

  const handleClick = () => {
    playAudio()
    setFlipped(!flipped)
  } 

  return (
    <div 
        className={`aspect-[3/4] card-container rounded-xl ${flipped ? '' : 'rotateY'}`}
        onClick={() => handleClick()}
      >
      {/* FRONT OF CARD */}
      <div 
        className="flex justify-center items-center flip rotateY rounded-xl
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <img 
          className="w-full h-full rounded-xl"
          src={urlImg} 
          alt={nameImg}
        />
      
        <audio ref={audioRef}>
          <source src={urlSound} /> 
        </audio> 
      </div>

      {/* BACK OF CARD */}
      <div className="flex justify-center items-center bg-red-400 flip backface-none rounded-xl">
        Back
      </div>
    </div>
  )
}

export default Card 
