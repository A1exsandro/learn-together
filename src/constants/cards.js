const cards = [
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

const uniqueCard = cards.map((cardName, idBoth) => ({
  idBoth,
  cardName
}))

export const pairsOfCards = [...uniqueCard, ...uniqueCard].map((card, id) => ({
  ...card, id
}))
