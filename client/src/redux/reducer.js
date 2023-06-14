import {
  GET_ALL_COUNTRY,
  GET_BY_DETAIL,
  GET_BY_NAME,
  FILTER,
  ORDER,
  GET_ACTIVITY,
} from "./actions";

let initialState = {
  allCountries: [],
  countries: [],
  allContinents: [],
  allActivities: [],
  activity: [],
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
        allCountries: action.payload,
      };

    case GET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };

    case FILTER: {
      const allContinents = [...state.allContinents];
      const filterCountries = allContinents.filter(
        (country) =>
          action.payload === "All" || country.continents === action.payload
      );
      return {
        ...state,
        countries: filterCountries,
      };
    }

    case ORDER: {
    const orderCountries = action.payload === 'Asc' ?
    state.allCountries.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (b.name > a.name) {
            return -1
        }
        return 0;
    }) :
    state.allCountries.sort(function (a, b) {
        if (a.name > b.name) {
            return -1;
        }
        if (b.name > a.name) {
            return 1;
        }
        return 0;
    })
    return {
      ...state,
      allCountries: orderCountries
  }
  }
    

    default:
      return state;
  }
};

export default rootReducer;
