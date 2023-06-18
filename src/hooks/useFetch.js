import { useEffect, useState } from "react" 

import { getStorage } from '../services/Firebase'
import { ref, getDownloadURL } from "firebase/storage" 
import { cardNames } from "../constants/cards"
 
const storage = getStorage()
const data = cardNames

export const useFetch = () => {
  const [images, setImages] = useState([])
  const [sounds, setSounds] = useState([])
  const makeCards = [{}]

  // GET DATA FROM FIREBASE
  useEffect(() => {
    const promises = data.map((dt) => (
      getDownloadURL(ref(storage, `images/${dt}.jpeg`))
    ))
    const audioPromises = data.map((dt) => (
      getDownloadURL(ref(storage, `audio/${dt}.mp3`))
    ))

    Promise.all(promises)
      .then((urls) => setImages(urls)) 
    Promise.all(audioPromises)
      .then((audios) => setSounds(audios)) 
  },[])

  // CREATING AN OBJECT THROUGH ARRAY INTERACTION
  for (let i = 0; i < data.length; i++) {
    makeCards[i] = {
      idBoth: i,  
      nameImg: data[i],
      urlImg: images[i],
      urlSound: sounds[i],
    }
  }   

  // DUPLICATING THE CARDS
  const pairsOfCards = [ ...makeCards, ...makeCards ].map((card, id) => ({
    id, ...card
  }))

  return { images, sounds, makeCards, pairsOfCards}
}
