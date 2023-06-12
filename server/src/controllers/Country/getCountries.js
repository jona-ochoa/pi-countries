const axios = require("axios");
const { Country } = require("../../db");

const getCountries = async () => {
  const URL = "http://localhost:5000/countries";
  try {
    const { data } = await axios(URL);

    let countries = await Promise.all(
      data.map(async (element) => {
        const country = {
          id: element.cca3,
          name: element.name.common,
          flags: element.flags.png,
          capital: element.capital ? element.capital[0] : "Not Found",
          continents: element.continents[0],
          population: element.population,
          subregion: element.subregion,
          area: element.area ? element.area.toString() : "Not Found",
        };

        Country.findOrCreate({
          where: {
            id: element.cca3,
            name: element.name.common,
            flags: element.flags.png,
            capital: element.capital ? element.capital[0] : "Not Found",
            continents: element.continents[0],
            population: element.population,
            subregion: element.subregion ? element.subregion : "Not Found",
            area: element.area ? element.area.toString() : "Not Found",
          },
        });
        return country;
      })
    );

    return countries;
  } catch (error) {
    return error;
  }
};

module.exports = { getCountries };
