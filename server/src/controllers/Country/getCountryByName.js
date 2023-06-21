const { Country, Activity } = require("../../db");
const { Op } = require("sequelize");

const getCountryByName = async (name) => {
  try {
    const filteredCountry = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: Activity
    });

    return filteredCountry.length > 0
      ? filteredCountry
      : new Error("Country not Found");
  } catch (error) {
    throw error;
  }
};

module.exports = { getCountryByName };
