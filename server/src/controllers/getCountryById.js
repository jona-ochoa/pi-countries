const { Country } = require("../db");
const { Op } = require('sequelize')

const getCountryById = async (id) => {
  try {
    const country = await Country.findOne({
      where: {
        id: {
          [Op.iLike]: `%${id}%`,
        },
      },
    });
    return country;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCountryById,
};
