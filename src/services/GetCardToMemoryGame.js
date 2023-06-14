// import { pairsOfCards } from "../constants/cards" 

// export const getCards = async () => {
//   await delay(2000)
//   return shuffleCards(pairsOfCards) 
// }

// const delay = async (time = 2000) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, time)
//   })
// }

// const shuffleCards = (list = []) => {
//   for (let i = list.length - 1; i > 0; i--) {
//     const randomIndex = Math.floor(Math.random() * (i + 1))

//     const item = list[i]
//     const randomItem = list[randomIndex]

//     list[i] = randomItem
//     list[randomIndex] = item
//   }

//   return list
// }
