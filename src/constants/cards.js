const cards = ['Love', 'Work', 'life', 'Good']

const uniqueCard = cards.map((cardName, idBoth) => ({
  idBoth,
  cardName
}))

export const pairsOfCards = [...uniqueCard, ...uniqueCard].map((card, id) => ({
  ...card, id
}))
