import React, { useEffect, useState } from "react" 

import { getStorage } from '../services/Firebase'
import { ref, getDownloadURL } from "firebase/storage"  

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
   
  const promises = data.map((dt) => (
    getDownloadURL(ref(storage, `images/${dt}.jpeg`))
  ))
  
  useEffect(() => {
    Promise.all(promises)
      .then((urls) => setImages(urls)) 
  },[promises])
 
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
     {
      images.map((urlImg, i) => (
        <div key={i}>
          <img 
            className="w-36 h-36 rounded-lg"
            src={urlImg} 
            alt=''
          />
        </div>
      ))
     }
    </div>
  )
}

export default Words