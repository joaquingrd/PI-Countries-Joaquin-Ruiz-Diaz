const axios = require("axios");
const { Country } = require("./db");

require("dotenv").config();
const { URL_PATH_API } = process.env;

//Necesito pedir la información de la API y guardarla con el metodo BulkCreate en la Base de Datos
//para trabajar directamente desde ahí y no desde la API

const getCountryByApi = async () => {
  try {
    const response = await axios.get(URL_PATH_API); //solicito los paises desde la API
    const getInfo = await response.data.map((country) => {
      //Selecciono de la respuesta, solo los countryos que preciso
      return {
        id: country.cca3,
        name: country.name.common,
        flags: country.flags[1],
        continents: country.continents
          ? country.continents[0]
          : (country.continents[0] = "Continents not found"),
        capital: country.capital
          ? country.capital[0]
          : (country.capital = "Capital not found"),
        subregion: country.subregion
          ? country.subregion
          : (country.subregion = ""),
        area: country.area,
        population: country.population,
      };
    });
    return getInfo;
  } catch (error) {
    // console.log(error);
  }
};
const countryDataBase = async () => {
  try {
    const countries = await getCountryByApi();
    const countDb = await Country.findAll(); // Traigo todos los datos de la base de datos
    if (!countDb.length) {
      //Verifico si existen datos en la base de datos.
      const createCountries = await Country.bulkCreate(countries); // si no existen, creo los paises en la base de datos ejecutando la función "getCountryByApi"
      return createCountries;
    } else {
      return countDb; //Si ya existen datos en la BD, los retorno.
    }
  } catch (error) {
    // console.log(error.message);
  }
};

module.exports = { countryDataBase }; //exporto la función para poder usarla en INDEX.JS
