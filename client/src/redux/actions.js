import axios from "axios";

export const GET_ALL_COUNTRY = "GET_ALL_COUNTRY";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_DETAIL = "GET_BY_DETAIL";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const FILTER_CONTINENTS = "FILTER_CONTINENTS";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const ORDER_COUNTRY = "ORDER_COUNTRY";
export const ORDER_POPULATION = "ORDER_POPULATION";

export function getCountries() {
  // endpoint = "http://localhost:3001/countries";
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/countries");
      return dispatch({
        type: GET_ALL_COUNTRY,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getByName(name) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/countries/?name=${name}`
      );

      const filteredCountries = data.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      );
      console.log(filteredCountries);
      return dispatch({
        type: GET_BY_NAME,
        payload: filteredCountries,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getByDetail(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/countries/:${id}`
      );
      return dispatch({
        type: GET_BY_DETAIL,
        action: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getActivity() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/activities");
      return dispatch({
        type: GET_ACTIVITY,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postActivity(payload) {
  return async function () {
    try {
      const res = await axios.post("http://localhost:3001/activities", payload);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
}

export const orderCountries = (payload) => {
  return {
    type: ORDER_COUNTRY,
    payload,
  };
};

export const filterContinents = (payload) => {
  return {
    type: FILTER_CONTINENTS,
    payload,
  };
};

export const orderPopulation = (payload) => {
  return {
    type: ORDER_POPULATION,
    payload,
  };
};

export const filterActivity = (payload) => {
  return {
    type: FILTER_ACTIVITY,
    payload,
  };
};
