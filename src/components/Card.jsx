import React, { useRef } from "react" 

const Card = ({ nameImg, urlImg, urlSound }) => {
  const audioRef = useRef(null)

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  } 

  const handleClick = () => {
    playAudio()
  }

  console.log(urlSound)

  return (
    <div onClick={() => handleClick()}>
      <img 
        className="w-36 h-36 rounded-lg"
        src={urlImg} 
        alt={nameImg}
      />
    
      <audio ref={audioRef}>
        <source src={urlSound} /> 
      </audio>
     
    </div>
  )
}

export default Card 
