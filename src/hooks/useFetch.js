import { useEffect, useState } from "react" 

import { getStorage } from '../services/Firebase'
import { ref, getDownloadURL } from "firebase/storage" 
import { cardNames } from "../constants/cards"
 
const storage = getStorage()
const data = cardNames

export const useFetch = () => {
  const [images, setImages] = useState(null)
  const [sounds, setSounds] = useState(null)
  const [makedCards, setMakedCards] = useState([])

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
      .catch((error) => {
        // Handle error if necessary
      });

    Promise.all(audioPromises)
      .then((audios) => setSounds(audios)) 
      .catch((error) => {
        // Handle error if necessary
      });
  },[]) 

  useEffect(() => {
    if (images && sounds) {
      const updatedMakedCards = data.map((dt, i) => ({
        idBoth: i,
        nameImg: dt,
        urlImg: images[i],
        urlSound: sounds[i],
      }));
      setMakedCards(updatedMakedCards);
    }
  }, [images, sounds]);

  // DUPLICATING THE CARDS
  const pairsOfCards = [ ...makedCards, ...makedCards ].map((card, id) => ({
    id, ...card
  }))

  // SHUFFLER THE CARDS
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

  const shuffledCards = shuffleCards(pairsOfCards)

  return { images, sounds, makedCards, pairsOfCards, shuffledCards}
}
