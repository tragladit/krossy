import { removeCard } from './tinderSelectors'

const SET_LIKE_TINDER = 'SET_LIKE_TINDER'
const SET_INITIAL_DATA = 'SET_INITIAL_DATA'

const initialState = { cards: false };

export const setInitialCards = data => ({ type: SET_INITIAL_DATA, data })

export const delCard = () => ({ type: SET_LIKE_TINDER })

const tinder = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKE_TINDER:
      return { ...state, cards: removeCard(state.cards) };
    case SET_INITIAL_DATA:
      return { ...state, cards: action.data };
    default:
      return state;
  }
}

export default tinder
