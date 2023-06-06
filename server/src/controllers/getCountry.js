const axios = require("axios");
const { Country } = require("../db");
const { where } = require("sequelize");

const getCountry = async () => {
  const URL = "http://localhost:5000/countries";
  try {
    const { data } = await axios(URL);

    let countries = [];
    data.forEach((element) => {
      const country = {
        id: element.cca3,
        name: element.name.common,
        image: element.flags.png,
        continent: element.continents[0],
        capital: element.capital ? element.capital[0] : "No Data",
        subregion: element.subregion,
        area: element.area ? element.area.toString() : "No Data",
        population: element.population,
      };

      Country.findOrCreate({
        where: {
          id: element.cca3,
          name: element.name.common,
          image: element.flags.png,
          continent: element.continents[0],
          capital: element.capital ? element.capital[0] : "No Data",
          subregion: element.subregion ? element.subregion : "No Data",
          area: element.area ? element.area.toString() : "No Data",
          population: element.population,
        },
      });
      countries.push(country);
    });

    return countries;
  } catch (error) {
    return error;
  }
};

module.exports = { getCountry };
