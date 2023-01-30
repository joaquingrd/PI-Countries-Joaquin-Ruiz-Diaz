import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_DETAILS = "GET_DETAILS";
export const GET_ACTIVITY = "GET_ACTIVITY";

export const SET_PAGE_COUNTRIES = "SET_PAGE_COUNTRIES";

export const RESET = "RESET";
export const RESET_COUNTRIES = "RESET_COUNTRIES";

export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_POPULATION = "SORT_BY_POPULATION";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";

export const POST_ACTIVITY = "POST_ACTIVITY";

export const LOADER = "LOADER";

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
      .then((data) => dispatch({ type: GET_BY_NAME, payload: data }))
      .catch((error) => {
        window.alert("Country not found!");
      });
  };
};

export const getDetails = (id) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/countries/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_DETAILS, payload: data }))
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getActivity = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/activities")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_ACTIVITY, payload: data }))
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setPageCountries = (start, end) => {
  return {
    type: SET_PAGE_COUNTRIES,
    payload: { start, end },
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
    const response = await axios.post(
      "http://localhost:3001/activities",
      payload
    );
    console.log(response);
    return response;
  };
}
