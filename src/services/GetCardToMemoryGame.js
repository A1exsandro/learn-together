// import { useMemory } from "../contexts/MemoryContext"




// export const getCards = async () => {
//   const { makeCards } = useMemory()

//   await delay(2000)
//   return shuffleCards(makeCards) 
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
