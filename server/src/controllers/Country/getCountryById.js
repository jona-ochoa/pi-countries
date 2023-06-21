const { Country, Activity } = require("../../db");

const getCountryById = async (id) => {
  try {
    let country = await Country.findOne({ where: { id }, include: Activity });
    country = {
      id: country.id,
      name: country.name,
      flags: country.flags,
      continents: country.continents,
      capital: country.capital,
      subregion: country.subregion,
      area: country.area,
      population: country.population,
      activities: country.activities.map((e) => {
        return {
          id: e.id,
          name: e.name,
          difficulty: e.difficulty,
          duration: e.duration,
          season: e.season
      }
      })
    }
    return country;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCountryById
};
