import axios from "axios";

export const ADD_COUNTRY = "ADD_COUNTRY";
export const REMOVE_COUNTRY = "REMOVE_COUNTRY";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addCountry = (country) => {
  const endpoint = "http://localhost:3001/countries";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, country);
      return dispatch({
        type: ADD_COUNTRY,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const removeCountry = (id) => {
  try {
    const endpoint = "http://localhost:3001/countries/" + id;
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_COUNTRY,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const filterCards = (name) => {
  return {
    type: FILTER,
    payload: name,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};
