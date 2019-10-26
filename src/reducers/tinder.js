import { parseSwipe } from './tinderSelectors'

const SET_LIKE_TINDER = 'SET_LIKE_TINDER'
const SET_DISLIKE_TINDER = 'SET_DISLIKE_TINDER'
const SET_INITIAL_DATA = 'SET_INITIAL_DATA'
const RES_TINDER_DATA = 'RES_TINDER_DATA'

const initialState = {
  cards: false,
  likes: [],
  dislikes: []
};

export const setInitialCards = data => ({ type: SET_INITIAL_DATA, data })

export const resTinderData = () => ({ type: RES_TINDER_DATA })

export const setLikeTinder = () => ({ type: SET_LIKE_TINDER })

export const setDislikeTinder = () => ({ type: SET_DISLIKE_TINDER })

const tinder = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKE_TINDER:
      const lk = parseSwipe(state.cards, state.likes)
      return { ...state, cards: lk.cards, likes: lk.swipes };
    case SET_DISLIKE_TINDER:
      const ds = parseSwipe(state.cards, state.dislikes)
      return { ...state, cards: ds.cards, dislikes: ds.swipes };
    case SET_INITIAL_DATA:
      return { ...state, cards: action.data };
    case RES_TINDER_DATA:
      return { ...state, cards: false, likes: [], dislikes: [] };
    default:
      return state;
  }
}

export default tinder
