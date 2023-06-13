import { createContext, useContext, useState } from "react"
import { pairsOfCards } from "../constants/cards"
import { TEMPO_MS } from "../constants/config"
import { getCards } from "../services/GetCardToMemoryGame"

const MemoryContext = createContext()

export const MemoryContextProvider = (props) => {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)
 
  const [idsFlippedCards, setIdsFlippedCards] = useState([])
  const [idFoundPairsCards, setIdFoundPairsCards] = useState([])
 
  const [numbersCardsFlipped, setNumbersCardsFlipped] = useState(0)
  const [score, setScore] = useState(0)

  // START GAME
  const startGame = async () => {
    setLoading(true)
    const cards = await getCards()
    setCards(cards)
    setLoading(false)
  }

  // RESET GAME
  const resetGame = async () => {
    const cards = await getCards()
    setCards(cards) 
    setIdsFlippedCards([])
    setIdFoundPairsCards([])
    setNumbersCardsFlipped(0)
    setScore(0)
  }

  // INCREMENT A VALUE WHEN THE CARD IS FLIPPED
  const numberOfTimesFlipped = () => {
    setNumbersCardsFlipped((amount) => amount + 1)
  }

  // CHECK CARDS
  const checkCards = ([id1, id2]) => {
    const idPair1 = cards.find(({ id }) => id === id1)?.idBoth
    const idPair2 = cards.find(({ id }) => id === id2)?.idBoth
    return idPair1 === idPair2
  }

  // SHOW CARD
  const showCard = ({ id, idBoth }) => {
    const isCardFlipped = idsFlippedCards.includes(id) || idFoundPairsCards.includes(idBoth)
    if (isCardFlipped) return

    numberOfTimesFlipped()

    if (idsFlippedCards.length >= 2) {
      return setIdsFlippedCards([])
    }
    if (idsFlippedCards.length === 0) {
      return setIdsFlippedCards([id])
    }

    const ids = [idsFlippedCards[0], id]
    setIdsFlippedCards(ids)

    // CHECK CARDS
    const sameCards = checkCards(ids)
    if (sameCards) {
      setScore(amount => amount + 1)
      setIdFoundPairsCards((ids) => [...ids, idBoth])
    }

    const time = sameCards ? 0 : TEMPO_MS.FLIP_CARDS

    setTimeout(() => {
      setIdsFlippedCards([])
    }, time)
  }

  return (
    <MemoryContext.Provider value={{
      cards,
      loading,
      numbersCardsFlipped,
      score,
      showCard,
      idsFlippedCards,
      idFoundPairsCards,
      startGame,
      resetGame
    }}>
      { props.children }
    </MemoryContext.Provider>
  )
}

export const useMemory = () => {
  return useContext(MemoryContext)
} 
