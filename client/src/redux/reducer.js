import {
  GET_ALL_COUNTRY,
  GET_BY_DETAIL,
  GET_BY_NAME,
  FILTER_CONTINENTS,
  ORDER_COUNTRY,
  GET_ACTIVITY,
  BY_ACTIVITY,
  ORDER_POPULATION,
} from "./actions";

let initialState = {
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
        countries: action.payload,
        allContinents: action.payload,
        population: action.payload,
        allActivities: action.payload,
      };

    case GET_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_BY_DETAIL:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };

    case BY_ACTIVITY: {
      const allActivities = state.allActivities;
      const filteredActivities =
        action.payload === "All"
          ? allActivities.filter((e) => e.activities.length > 0)
          : allActivities.filter((c) => {
            c.activities && c.activities.find((e) => e.name.toLowerCase() === action.payload);
            });
      return {
        ...state,
        countries: filteredActivities,
      };
    }

    case FILTER_CONTINENTS: {
      const allContinents = state.allContinents;
      const filterContinents =
        action.payload === "All"
          ? allContinents
          : allContinents.filter((a) => a.continents === action.payload);
      return {
        ...state,
        countries: filterContinents,
      };
    }

    case ORDER_COUNTRY: {
      const orderCountries =
        action.payload === "Asc"
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
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
        countries: orderCountries,
      };
    }

    case ORDER_POPULATION: {
      const orderPopulation =
        action.payload === "Min"
          ? state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
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
