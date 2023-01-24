import {
  GET_COUNTRIES,
  GET_BY_NAME,
  GET_DETAILS,
  GET_ACTIVITY,
  SET_PAGE_CHARACTER,
  RESET,
  RESET_COUNTRIES,
  SORT_BY_NAME,
  SORT_BY_POPULATION,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
} from "./actions";

const inicialState = {
  pageChars: [],
  countries: [],
  allCountries: [], //Es necesario hacer una copia de todos los paises para realizar los filtrados
  details: [],
  activities: [],
  allActivities: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allcountries: action.payload,
      };

    case GET_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_ACTIVITY:
      return {
        ...state,
        detail: action.payload,
      };

    case SET_PAGE_CHARACTER:
      return {
        ...state,
        pageChars: [
          ...state.countries.slice(action.payload.start, action.payload.end),
        ],
      };

    case RESET:
      return {
        ...state,
        detail: [],
      };

    case RESET_COUNTRIES:
      return {
        ...state,
        countries: [],
      };

    case SORT_BY_NAME:
      const sortCountriesName =
        action.payload === "asc"
          ? state.allCountries.sort((a, b) => a.name.localeCompare(b.name))
          : state.allCountries.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        countries: sortCountriesName,
      };

    case SORT_BY_POPULATION:
      const filterPopulation =
        action.payload === "asc" //si el action.payload es ascendente
          ? state.countries.sort((a, b) => {
              // se le asigna al estado ordenado de manera ascendente segun population
              return Number(a.population) > Number(b.population) // esta funcion compara la population de dos paises
                ? -1 // y si se cumple a>b se le asigna -1
                : Number(a.population) < Number(b.population) // sino, pregunta a < b
                ? 1 // si es si, entonces asigna el valor 1
                : 0; // sinó, asigna 0 y de esa manera el sort va ordenando
            })
          : state.countries.sort((a, b) => {
              // si no es ascendente, osea es descendente, se le asigna al filterPopularion
              return Number(a.population) > Number(b.population) //el arreglo countries del estado actual ordenado de manera
                ? 1 // descendente
                : Number(a.population) < Number(b.population)
                ? -1
                : 0;
            });
      return {
        ...state,
        countries: filterPopulation,
      };

    case FILTER_BY_CONTINENT:
      const allCountries = state.allCountries;
      const continentFilter =
        action.payload === "All"
          ? allCountries
          : allCountries.filter((event) => event.continents === action.payload);
      return {
        ...state,
        countries: continentFilter,
      };

    case FILTER_BY_ACTIVITY:
      const allCountriesAct = state.allCountries;
      const activitiesFilter =
        action.payload === "All"
          ? allCountriesAct
          : allCountriesAct.filter(
              (country) =>
                country.activities &&
                country.activities
                  .map((event) => event.name)
                  .includes(action.payload) //
            );

      return {
        ...state,
        countries: activitiesFilter,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
