import { GET_ALL_COUNTRY, GET_BY_DETAIL, GET_BY_NAME } from "./actions";

let initialState = {
  allCountries: [],
  allContinents: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRY:
      return {
        ...state,
        allCountries: action.payload,
      };

    case GET_BY_NAME:
      return {
        ...state,
        allCountries: action.payload,
      };
      case GET_BY_DETAIL: 
      return {
        ...state,
        allCountries: action.payload
      };     

    default:
      return state;
  }
};

export default rootReducer;
