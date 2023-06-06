const { Country } = require("../db");
const { Op } = require("sequelize");

const getCountryByName = async (name) => {

  try {
    const filteredCountry = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    return filteredCountry.length > 0
      ? filteredCountry
      : new Error("Country not Found");
  } catch (error) {
    return { error: `No hay paises con nombre: ${name}` };
  }
};

module.exports = { getCountryByName };
