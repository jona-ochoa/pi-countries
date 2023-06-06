const { Router } = require("express");
const { Country, Activity } = require("../db");
// const axios = require("axios");
const { getCountry } = require("../controllers/getCountry");
const { getCountryByName } = require("../controllers/getCountryByName");
const { getCountryById } = require("../controllers/getCountryById");

const router = Router();

router.get("/countries", async (req, res) => {
  const { name } = req.query;
  if (!name) {
    try {
      const allCountries = await getCountry();
      res.status(200).json(allCountries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    try {
      const filteredCountry = await getCountryByName(name);
      if (filteredCountry.length > 0) {
        res.status(200).json(filteredCountry);
      } else {
        res.status(404).json({ error: `Country not Found` });
      }
    } catch (error) {
      res.status(404).json({ error: `Country not Found` });
    }
  }
});



router.get('/countries/:id',async(req,res)=>{
  const {id} = req.params
  try {
      const country = await getCountryById(id)
      res.status(200).json(country)
  } catch (error) {
      res.status(500).json({error:error.message})
  }
})

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
