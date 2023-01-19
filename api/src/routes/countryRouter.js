const { Router } = require("express");
const{ getAllCountries, getCountryId, findCountry } = require('../controllers/countryControllers')

const countryRouter = Router();

const SECCESS = 200
const ERR = 404

countryRouter.get('/', async (req, res) => {
    const { name } = req.query;
    let countries;
    try {
        if(name) countries = await findCountry(name)
        else countries = await getAllCountries()
        res.status(SECCESS).json(countries) 

    } catch (error) {
        res.status(ERR).send(error.message)
    }
})

countryRouter.get('/:id', async (req, res) => {
    try {
        let id  = req.params.id.toUpperCase()
        let country = await getCountryId(id)
        res.status(SECCESS).json(country)
    } catch (error) {
        res.status(ERR).send(error.message)
        
    }
})

module.exports = countryRouter