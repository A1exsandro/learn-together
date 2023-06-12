const cards = ['Love', 'Work', 'life', 'Good', 'Learn', 'Stop',
  'Girl', 'Tall', 'Short', 'Fast', 'Big', 'Study', 'Try'
]

const uniqueCard = cards.map((cardName, idBoth) => ({
  idBoth,
  cardName
}))

export const pairsOfCards = [...uniqueCard, ...uniqueCard].map((card, id) => ({
  ...card, id
}))
