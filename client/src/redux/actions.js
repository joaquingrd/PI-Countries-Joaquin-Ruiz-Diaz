import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_DETAILS = "GET_DETAILS";
export const GET_ACTIVITY = "GET_ACTIVITY";

export const RESET = "RESET";
export const RESET_COUNTRIES = "RESET_COUNTRIES";

export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_POPULATION = "SORT_BY_POPULATION";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";

export const getCountries = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/countries")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_COUNTRIES, payload: data }));
  };
};

export const getCountryName = (name) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/countries?name=${name}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_BY_NAME, payload: data }));
    // .catch(console.log(error));
  };
};

export const getDetails = (id) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/countries?name=${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_DETAILS, payload: data }));
    // .catch(error);
  };
};

export const getActivity = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/activities")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_ACTIVITY, payload: data.results }));
    // .catch(error);
  };
};

export function resetState() {
  return {
    type: RESET,
  };
}

export function resetCountries() {
  return {
    type: RESET_COUNTRIES,
  };
}

export const sortByName = (payload) => {
  return {
    type: SORT_BY_NAME,
    payload: payload,
  };
};

export const sortByPopulation = (payload) => {
  return {
    type: SORT_BY_POPULATION,
    payload: payload,
  };
};

export const filterByContinent = (payload) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: payload,
  };
};

export const filterByActivity = (payload) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: payload,
  };
};

//utilizo axios para utilizar el metodo post.
export function postActivities(payload) {
  return async function (dispatch) {
    const datos = await axios.post("http://localhost:3001/activities", payload);
    return datos;
  };
}
