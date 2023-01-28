const { Country, TouristActivity } = require("../db");
const { Op } = require("sequelize");

const getAllCountries = async () => {
  const allCountries = await Country.findAll({
    include: TouristActivity, // El incluide, une la tabla de las actividades turisticas
  });
  return allCountries;
};

const getCountryId = async (id) => {
  const countryId = await Country.findByPk(id, {
    include: TouristActivity,
  });
  if (!countryId) throw Error(`There is no country with the id: ${id} `);
  return countryId;
};

const findCountry = async (name) => {
  let upperName = name.charAt(0).toUpperCase() + name.slice(1); // coloco la primera letra en mayuscula para que coincida
  const countryName = await Country.findAll({
    where: {
      name: { [Op.iLike]: `%${upperName}%` },
    },
    include: TouristActivity,
  });
  if (countryName.length) return countryName;
  throw Error(`There is no country with the name: ${name.toUpperCase()} `);
};

module.exports = {
  getAllCountries,
  getCountryId,
  findCountry,
};
