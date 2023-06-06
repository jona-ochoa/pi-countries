import { ADD_COUNTRY, 
    REMOVE_COUNTRY, 
    // FILTER, ORDER 
} from "./actions";

const initialState = {
  myFavorites: [],
  allCountries: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return {
        ...state,
        myFavorites: action.payload,
        allCountries: action.payload,
      };

    case REMOVE_COUNTRY:
      return {
        ...state,
        myFavorites: action.payload
      };

    // case FILTER:
    //   const filterChar = state.allCountries.filter(
    //     (char) => char.gender === action.payload
    //   );
    //   return {
    //     ...state,
    //     myFavorites: filterChar,
    //   };

    // case ORDER:
    //   const allCharactersCopy = [...state.allCharacters];
    //   return {
    //     ...state,
    //     myFavorites:
    //       action.payload === "A"
    //         ? allCharactersCopy.sort((a, b) => a.id - b.id)
    //         : allCharactersCopy.sort((a, b) => b.id - a.id),
    //   };

    default:
      return { ...state };
  }
};

export default rootReducer;
