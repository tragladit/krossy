import { parseData } from './searchSelectors';

const SET_BRANDS = 'SET_BRANDS'
const SET_PRICE = 'SET_PRICE'
const SET_DISCOUNT = 'SET_DISCOUNT'
const SET_SORT = 'SET_SORT'
const SET_COLOR = 'SET_COLOR'
const SET_COLORS = 'SET_COLORS'
const RES_STATE = 'RES_STATE'

const initialState = {
  brands: {
    'Nike': false, 'Air Jordan': false, 'Adidas': false, 'Off-White': false,
    'Asics': false, 'Converse': false, 'Puma': false, 'Reebok': false, 'FILA': false
  },
  price: false,
  prices: { startValue: 3000, endValue: 20000 },
  discount: false,
  sort: 'Не сортировать',
  color: false,
  colors: []
};

export const setBrands = val => ({ type: SET_BRANDS, val })
export const setPrice = (field, val) => ({ type: SET_PRICE, field, val })
export const setDiscount = val => ({ type: SET_DISCOUNT, val })
export const setSort = val => ({ type: SET_SORT, val })
export const setColor = val => ({ type: SET_COLOR, val })
export const setColors = (metod, val) => ({ type: SET_COLORS, metod, val })
export const resState = () => ({ type: RES_STATE })

const search = (state = initialState, action) => {
  switch (action.type) {
    case SET_BRANDS:
      return { ...state, brands: { ...state.brands, [action.val]: !state.brands[action.val] }};
    case SET_PRICE:
      return { ...state, [action.field]: action.val };
    case SET_DISCOUNT:
      return { ...state, discount: action.val };
    case SET_SORT:
      return { ...state, sort: action.val };
    case SET_COLOR:
      return { ...state, color: action.value };
    case SET_COLORS:
      return { ...state, colors: parseData(state.colors, action.metod, action.val) };
    case RES_STATE:
      return initialState;
  }
  return state;
}

export default search
