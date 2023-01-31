import {
  GET_COUNTRIES,
  GET_BY_NAME,
  GET_DETAILS,
  GET_ACTIVITY,
  SET_PAGE_COUNTRIES,
  // RESET,
  // RESET_COUNTRIES,
  SORT_BY_NAME,
  SORT_BY_POPULATION,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  POST_ACTIVITY,
  LOADER,
} from "./actions";

const inicialState = {
  pageCountries: [],
  allCountries: [], //Es necesario hacer una copia de todos los paises para realizar los filtrados
  countries: [],
  details: [],
  activities: [],
  filters: { activities: "All", continents: "All" },
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      // console.log("countries", action.payload);
      return {
        ...state,
        countries: [...action.payload],
        allCountries: [...action.payload],
      };

    case GET_BY_NAME:
      return {
        ...state,
        countries: [...action.payload],
      };

    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    case GET_ACTIVITY:
      // console.log("activity", action.payload);
      return {
        ...state,

        activities: [...action.payload],
      };

    case POST_ACTIVITY:
      return {
        ...state,
      };

    case SET_PAGE_COUNTRIES:
      return {
        ...state,
        pageCountries: [
          ...state.countries.slice(action.payload.start, action.payload.end),
        ],
      };

    // case RESET:
    //   return {
    //     ...state,
    //     detail: [],
    //   };

    // case RESET_COUNTRIES:
    //   return {
    //     ...state,
    //     countries: [],
    //   };

    case SORT_BY_NAME:
      const sortCountriesName =
        action.payload === "asc"
          ? state.countries.sort((a, b) => a.name.localeCompare(b.name))
          : state.countries.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        countries: [...sortCountriesName],
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
        countries: [...filterPopulation],
      };

    case FILTER_BY_ACTIVITY:
      state.filters.activities = action.payload; //actualiza el estado del filtro para utilizar en activity
      const allCountriesActivities = state.allCountries;
      let filteredActivities = [];
      if (action.payload === "All") {
        filteredActivities = allCountriesActivities.filter((country) =>
          country.TouristActivities[0]?.name
            ? country.TouristActivities[0]
            : false
        );
      } else {
        filteredActivities = allCountriesActivities.filter((event) =>
          event.TouristActivities.some(
            (country) => country.name === action.payload
          )
        );
      }
      if (state.filters.continents !== "All") {
        filteredActivities = filteredActivities.filter(
          (country) => country.continents === state.filters.continents
        );
      }

      return {
        ...state,
        countries: [...filteredActivities],
      };

    case FILTER_BY_CONTINENT:
      state.filters.continents = action.payload; //actualiza el estado del filtro para utilizar en activity
      let filteredContinents = state.allCountries;
      if (state.filters.activities !== "All") {
        filteredContinents = filteredContinents.filter((event) =>
          event.TouristActivities.some(
            (country) => country.name === state.filters.activities
          )
        );
      }
      if (action.payload !== "All") {
        filteredContinents = filteredContinents.filter(
          (country) => country.continents === action.payload
        );
      }

      return {
        ...state,
        countries: [...filteredContinents],
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
