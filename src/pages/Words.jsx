import React, { useEffect, useState } from "react" 

import { getStorage } from '../services/Firebase'
import { ref, getDownloadURL } from "firebase/storage"  
import Loader from "../components/Loader"
import Card from "../components/Card"

const storage = getStorage()

const data = [
  'butterfly',
  'avocado',
  'banana',
  'bathroom',
  'bedroom',
  'breakfast',
  'bridge',
  'brothers', 
  'closed',
  'cook',
  'dance',
  'eat',
  'fear',
  'fire',
  'film',
  'fruits',
  'kitchen',
  'night',
  'read',
  'open',
  'marketplace',
  'play',
  'smell',
  'sleep',
  'plant',
  'tired'
] 

const Words = () => { 
  const [images, setImages] = useState([])
  const [sounds, setSounds] = useState([])
  const [cards] = useState([{}])
  
  
  const promises = data.map((dt) => (
    getDownloadURL(ref(storage, `images/${dt}.jpeg`))
  ))

  const audioPromises = data.map((dt) => (
    getDownloadURL(ref(storage, `audio/${dt}.mp3`))
  ))
  
  useEffect(() => {
    Promise.all(promises)
      .then((urls) => setImages(urls)) 

    Promise.all(audioPromises)
      .then((audios) => setSounds(audios)) 
  },[])

  // CREATING AN OBJECT THROUGH ARRAY INTERACTION
  for (let i = 0; i < data.length; i++) {
    cards[i] = {
      id: i +1,
      nameImg: data[i],
      urlImg: images[i],
      urlSound: sounds[i],
    }
  } 
 
  return (
    <div 
      className="flex flex-wrap justify-center gap-2 mt-2"
    >
     {
      ( sounds.length > 0  && 
        cards.map((card, i) => (
          <Card key={i} {...card} />
        ))
      ) || (
        <Loader />
      )
     }
    </div>
  )
}

export default Words
