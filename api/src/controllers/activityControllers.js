const { Country, TouristActivity } = require('../db');

const getAllActivity = async () => { //este get es necesario para los filtros en el front
    const allActivity = await TouristActivity.findAll({
        include: Country // El incluide, une la tabla de los paises
    })
    return allActivity;
}

const createActivity = async (name, difficulty, duration, season, country) => {
    if (!name || !difficulty || !duration || !season || !country) {throw Error ('Mandatory data is missing')}
    
    const newActivity = await TouristActivity.create({
        name, 
        difficulty, 
        duration, 
        season
    })

    country.map( async (countr) => {
        const dbCountry = await Country.findOne({
            where: {
                name: countr
            }
        })
        newActivity.addCountry(dbCountry)
    })
return newActivity;
}

module.exports = {getAllActivity, createActivity }



