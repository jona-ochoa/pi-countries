const { Router } = require("express");
const { Country, Activity } = require("../db");
// const axios = require("axios");
const { getCountry } = require("../controllers/getCountry");
const { getCountryByName } = require("../controllers/getCountryByName");
const { getCountryById } = require("../controllers/getCountryById");

const router = Router();

router.get("/countries", async (req, res) => {
  const { name } = req.query;
  if (name) {
    const country = await getCountryByName(name);
    if (country.error) return res.status(404).json(country.error);
    return res.json(country);
  } else {
    const allCountry = await getCountry();
    return res.status(200).json(allCountry);
  }
});

router.get("/countries/name", async (req, res) => {
  const { name } = req.query;
  if (name) {
    const countries = await getUserByName(name);
    if (countries.error) return res.status(404).json(countries);
    return res.status(200).json(countries);
  } else {
    const allCountry = getCountry();
    return res.status(200).json(allCountry);
  }
});


router.get("/countries/:id", async (req, res) => {
  const { id } = req.params;
  if(id){
    try {
      const countryID = await getCountryById(id);
      return res.status(200).json(countryID);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  } else {
    return res.status(500).json('Not Found');
  }
});

router.post("/activities", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    let activity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    await activity.setCountries(countries);

    let activities = await Activity.findOne({
      where: {
        name,
      },
      include: {
        model: { Country },
      },
    });
    res.json(activities);
  } catch (error) {
    next(error);
  }
});

router.get("/activities", async (req, res) => {
  const activities = await Activity.findAll({ include: Country });
  const filterActivity = activities.map((i) => i.name.toLowerCase());
  const result = filterActivity.filter((item, index) => {
    return filterActivity.indexOf(item) === index;
  });
  res.json(total);
});

module.exports = router;
