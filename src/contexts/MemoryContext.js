import { createContext, useContext, useState } from "react"

const MemoryContext = createContext()

export const MemoryContextProvider = (props) => {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)
  const [idFoundCards, setIdFoundCards] = useState([])
  const [idFoundPairsCards, setIdFoundPairsCards] = useState([])
  const [openCards, setOpenCards] = useState([])
  const [numbersCardsFlipped, setNumbersCardsFlipped] = useState(0)
  const [score, setScore] = useState(0)

  // INCREMENT A VALUE WHEN THE CARD IS FLIPPED
  const numberOfTimesFlipped = () => {
    setNumbersCardsFlipped((amount) => amount + 1)
  }

  // SHOW CARD
  const showCard = ({ id, idBoth }) => {
    numberOfTimesFlipped()
    if (idFoundCards.length >= 2) {
      return setIdFoundCards([])
    }
    setIdFoundCards((ids) => [...ids, id])
  }

  return (
    <MemoryContext.Provider value={{
      cards,
      numbersCardsFlipped,
      score,
      showCard,
      idFoundCards
    }}>
      { props.children }
    </MemoryContext.Provider>
  )
}

export const useMemory = () => {
  return useContext(MemoryContext)
} 
