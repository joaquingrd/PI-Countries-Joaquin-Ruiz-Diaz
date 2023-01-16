const { Router } = require("express");
const countryRouter = Router();
const{ getAllCountries, getCountry, findCountry } = require('../controllers/countryControllers')

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
        res.status(ERR).json(error.message)
    }
})

countryRouter.get('/:id', async (req, res) => {
    try {
        let id  = req.params.id.toUpperCase()
        let country = await getCountry(id)
        res.status(SECCESS).json(country)
    } catch (error) {
        res.status(ERR).json(error.message)
        
    }
})

module.exports = countryRouter;