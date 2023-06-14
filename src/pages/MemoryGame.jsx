import React, { useEffect, useState } from "react"
import Card from "../components/memory-game/Card"
import Result from "../components/memory-game/Result"
import Score from "../components/memory-game/Score" 
import { useMemory } from "../contexts/MemoryContext"
import { pairsOfCards } from "../constants/cards"

import { getStorage } from '../services/Firebase'
import { ref, getDownloadURL } from "firebase/storage" 

const storage = getStorage()

const data = pairsOfCards

const MemoryGame = () => { 
  const [images, setImages] = useState([])
  const [sounds, setSounds] = useState([])
  const [cards] = useState([{}])
  const loading = false

  useEffect(() => {
    const promises = data.map((dt) => (
      getDownloadURL(ref(storage, `images/${dt.cardName}.jpeg`))
    ))
  
    const audioPromises = data.map((dt) => (
      getDownloadURL(ref(storage, `audio/${dt.cardName}.mp3`))
    ))

    Promise.all(promises)
      .then((urls) => setImages(urls)) 

    Promise.all(audioPromises)
      .then((audios) => setSounds(audios)) 
  },[])

  // CREATING AN OBJECT THROUGH ARRAY INTERACTION
  for (let i = 0; i < data.length; i++) {
    cards[i] = {
      id: data[i].id,
      idBoth: data[i].idBoth,
      nameImg: data[i].cardName,
      urlImg: images[i],
      urlSound: sounds[i],
    }
  }

  console.log(cards)
  console.log('data', data)

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
            cards.map((card) => (
              <Card key={card.id} {...card} />
            ))
          ) 
        }
      </div>

      <Result />
    </div> 
  )
}

export default MemoryGame
