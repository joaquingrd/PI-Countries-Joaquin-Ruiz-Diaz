const axios = require('axios');
const { Country } = require('./db');

//Necesito pedir la información de la API y guardarla con el metodo BulkCreate en la Base de Datos
//para trabajar directamente desde ahí y no desde la API

const getCountryByApi = async () => {
    try {
        const response = await axios.get('https://restcountries.com/v3/all'); //solicito los paises desde la API
        const getInfo = await response.data.map(element => { //Selecciono de la respuesta, solo los elementos que preciso
            return {
                id: element.cca3,
                name: element.name.common,
                flags: element.flags[1],
                continents: element.continents? element.continents[0] : element.continents[0] = 'continents not found',
                capital: element.capital? element.capital[0] : element.capital = 'capital not found',
                subregion: element.subregion? element.subregion : element.subregion = 'subregion not found',
                area: element.area,
                population: element.population
            }
        })
        return getInfo
    } catch (error) {
        console.log(error)
    }
}

async function countryDataBase () {
    try {
        const countr = await getCountryByApi();
        const countDb = await Country.findAll(); // Traigo todos los datos de la base de datos
        if(!countDb.length) { //Verifico si existen datos en la base de datos.
            const createCount = await Country.bulkCreate(countr) // si no existen, creo los paises en la base de datos ejecutando la función "getCountryByApi"
            return createCount
        }else{
            return countDb; //Si ya existen datos en la BD, los retorno.
        }
    } catch (error) {
        console.log(error.message)
    }
    
}

module.exports = { countryDataBase } //exporto la función para poder usarla en INDEX.JS
