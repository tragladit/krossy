export const parseSwipe = (cards, swipes) => {

  const swipe = cards[0]
  const NewSwipes = swipes.length ? [...swipes] : []
  NewSwipes.push(swipe)
  const newCards = cards.slice(1, cards.length)

  return { cards: newCards, swipes: NewSwipes }
}



