import { useEffect, useState } from "react"
import { pairsOfCards } from "../constants/cards"

import { getStorage } from '../services/Firebase'
import { ref, getDownloadURL } from "firebase/storage" 
 
const storage = getStorage() 

export const useFetch = () => { 
  const data = pairsOfCards
  const makeCards = [{}]

  // GET DATA FROM FIREBASE
  const [images, setImages] = useState([])
  const [sounds, setSounds] = useState([])

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

  },[data])

  // CREATING AN OBJECT THROUGH ARRAY INTERACTION
  for (let i = 0; i < data.length; i++) {
    makeCards[i] = {
      id: data[i].id,
      idBoth: data[i].idBoth,
      nameImg: data[i].cardName,
      urlImg: images[i],
      urlSound: sounds[i],
    }
  }   
  
  return shuffleCards(makeCards)
} 

const shuffleCards = (list = []) => {
  for (let i = list.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))

    const item = list[i]
    const randomItem = list[randomIndex]

    list[i] = randomItem
    list[randomIndex] = item
  }

  return list
}
