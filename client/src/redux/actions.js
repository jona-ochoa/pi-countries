import axios from "axios";

export const GET_ALL_COUNTRY = "GET_ALL_COUNTRY";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_DETAIL = "GET_BY_DETAIL";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

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

      const filteredCountries = data.filter(country => 
        country.name.toLowerCase().includes(name.toLowerCase())
      );
      console.log(filteredCountries)
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

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};

export const filterCards = (name) => {
  return {
    type: FILTER,
    payload: name,
  };
};
