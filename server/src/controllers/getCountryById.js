const { Country } = require("../db");

const getCountryById = async (id) => {
  console.log(id);
  try {
    const country = await Country.findOne({ where: { id } });

    return country;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCountryById,
};
