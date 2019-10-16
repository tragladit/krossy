import {
  CHANGE_GENDER, CHOOSE_SIZE, CHOOSE_SIZE_BY_SIZE, GET_USER_INFO, IS_CHANGE_BOOLEAN, GET_DATA,
  SET_NEW_INIT_DATA, SET_DATA_ON_CHANGE_COLOR, SET_DATA_ON_CHANGE_SIZE
} from "./constants";

// CONNECT_LOAD_USER_INFO, FETCH_LOAD_SETTING, 
// GET_MODEL_BY_ID,
// GET_PRODUCTS,
// GET_USER_ID, 

const initialState = {
  userInfo: {},
  isLoadUserInfo: false,
  isLoadSetting: false,
  isSaveSetting: false,
  isLoadProducts: false,
  isLoadModels: false,
  sizeChart: [
    {
      id: 1,
      size: "38",
      isSelected: false
    },
    {
      id: 2,
      size: "38.5",
      isSelected: false
    },
    {
      id: 3,
      size: "39",
      isSelected: false
    },
    {
      id: 4,
      size: "39.5",
      isSelected: false
    },
    {
      id: 5,
      size: "40",
      isSelected: false
    },
    {
      id: 6,
      size: "40.5",
      isSelected: false
    },
    {
      id: 7,
      size: "41",
      isSelected: false
    },
    {
      id: 8,
      size: "41.5",
      isSelected: false
    },
    {
      id: 9,
      size: "42",
      isSelected: false
    },
    {
      id: 10,
      size: "42.5",
      isSelected: false
    },
    {
      id: 11,
      size: "43",
      isSelected: false
    },
    {
      id: 12,
      size: "43.5",
      isSelected: false
    },
    {
      id: 13,
      size: "44",
      isSelected: false
    },
    {
      id: 14,
      size: "44.5",
      isSelected: false
    },
    {
      id: 15,
      size: "45",
      isSelected: false
    }
  ],
  gender: 'male',
  offersByModel: [],
  products: [],
  modelsParams: {},
  currentProduct: {},
  currentId: null,
  currentColor: '',
  currentSize: null
};

export const isChangeBoolean = (field, bool) => {
  return {
    type: IS_CHANGE_BOOLEAN,
    field,
    bool
  }
};

export const getUserInfo = (data) => {
  return {
    type: GET_USER_INFO,
    data
  }
};

export const onChangeGender = (value) => {
  return {
    type: CHANGE_GENDER,
    value
  }
};

export const onChooseSize = (id) => {
  return {
    type: CHOOSE_SIZE,
    id
  }
};

export const onChooseSizeBySize = (size) => {
  return {
    type: CHOOSE_SIZE_BY_SIZE,
    size
  }
};

export const getData = (field, data) => {
  return {
    type: GET_DATA,
    field,
    data
  }
};

export const setNewInitData = (modelsParams, currentProduct, current) => ({
  type: SET_NEW_INIT_DATA, modelsParams, currentProduct, current
});

export const setDataOnChangeColor = (currentColor, currentSize, currentId, offers) => (
  { type: SET_DATA_ON_CHANGE_COLOR, currentColor, currentSize, currentId, offers }
);

export const setDataOnChangeSize = (currentSize, currentId, offers) => (
  { type: SET_DATA_ON_CHANGE_SIZE, currentSize, currentId, offers }
);

export function user(state = initialState, action) {
  switch (action.type) {
    case IS_CHANGE_BOOLEAN:
      return { ...state, [action.field]: action.bool };
    case CHANGE_GENDER:
      return { ...state, gender: action.value };
    case GET_USER_INFO:
      return { ...state, userInfo: action.data };
    case CHOOSE_SIZE:
      const tempById = state.sizeChart.map(item =>
        (item.id === action.id) ? { ...item, isSelected: !item.isSelected } : item);
      return { ...state, sizeChart: tempById };
    case CHOOSE_SIZE_BY_SIZE:
      const tempBySize = state.sizeChart.map(item =>
        (item.size === action.size) ? { ...item, isSelected: !item.isSelected } : item);
      return { ...state, sizeChart: tempBySize };
    case GET_DATA:
      return { ...state, [action.field]: action.data };
    case SET_NEW_INIT_DATA:
      return {
        ...state,
        modelsParams: action.modelsParams, currentProduct: action.currentProduct,
        currentId: action.current.id, currentSize: action.current.size, currentColor: action.current.color
      };
    case SET_DATA_ON_CHANGE_COLOR:
      return {
        ...state, offersByModel: action.offers,
        currentColor: action.currentColor, currentSize: action.currentSize, currentId: action.currentId
      };
    case SET_DATA_ON_CHANGE_SIZE:
      return {
        ...state, offersByModel: action.offers, currentSize: action.currentSize, currentId: action.currentId
      };
  }
  return state;
}
