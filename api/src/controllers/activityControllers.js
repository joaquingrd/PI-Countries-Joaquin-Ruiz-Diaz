const { Country, TouristActivity } = require("../db");

const getAllActivity = async () => {
  //este get es necesario para los filtros en el front
  const allActivity = await TouristActivity.findAll({
    include: Country, // El incluide, une la tabla de los paises
  });
  if(!allActivity.length) throw Error ("There are no tourist activities")
  return allActivity;
};

const createActivity = async (name, difficulty, duration, season, countryId) => {
  if (!name || !difficulty || !duration || !season || !countryId)
    throw Error("Mandatory data is missing");

  const newActivity = await TouristActivity.create({
    name,
    difficulty,
    duration,
    season,
  });

  const pushActivity = await Country.findAll({
    where: {
      id: countryId,
    },
  });

  await newActivity.addCountry(pushActivity);

  return newActivity;
};

module.exports = { getAllActivity, createActivity };
