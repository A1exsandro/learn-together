import { pairsOfCards } from "../constants/cards"

export const getCards = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pairsOfCards)
    }, 2000)
  })
}
