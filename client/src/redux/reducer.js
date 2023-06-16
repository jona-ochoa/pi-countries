import {
  GET_ALL_COUNTRY,
  GET_BY_DETAIL,
  GET_BY_NAME,
  FILTER_CONTINENTS,
  FILTER_ACTIVITY,
  ORDER_COUNTRY,
  GET_ACTIVITY,
  ORDER_POPULATION,
} from "./actions";

let initialState = {
  allCountries: [],
  countries: [],
  allContinents: [],
  allActivities: [],
  activity: [],
  population: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRY:
      return {
        ...state,
        allCountries: action.payload,
        allContinents: action.payload,
        population: action.payload,
        allActivities: action.payload,
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

    case FILTER_CONTINENTS: {
      const allContinents = state.allContinents;
      const filterContinents =
        action.payload === "All"
          ? allContinents
          : allContinents.filter((i) => i.continents === action.payload);
      return {
        ...state,
        allCountries: filterContinents,
      };
    }

    case FILTER_ACTIVITY: {
      const allActivities = state.allActivities;
      const activityFilter =
        action.payload === "All"
          ? allActivities.filter((e) => e.activities && e.activities.length > 0)
          : allActivities.filter((c) =>
              c.activities && action.payload && c.activities.find((element) => element.name.toLowerCase() === action.payload)
            );
      return {
        ...state,
        allCountries: activityFilter,
      };
    }
    case ORDER_COUNTRY: {
      const orderCountries =
        action.payload === "Asc"
          ? state.allCountries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.allCountries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allCountries: orderCountries,
      };
    }

    case ORDER_POPULATION: {
      const orderPopulation =
        action.payload === "Min"
          ? state.allCountries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : state.allCountries.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        population: orderPopulation,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
