const { Router } = require("express");
const { Country, Activity } = require("../db");

const router = Router();

router.get("/countries", async (req, res) => {
  const { name } = req.body;
  const countries = await Country.findAll({ includes: Activity });
  if (name) {
    const nameFiltered = await countries.filter((i) =>
      i.name.toLowerCase().startsWidth(name.toLowerCase())
    );
    nameFiltered.length
      ? res.json(nameFiltered)
      : res.status(404).send({ msg: "Not found" });
  } else {
    res.json(countries);
  }
});

router.get("countries/:id", async (req, res, next) => {
  const { id } = req.params;
  const countries = await Country.findByPk(id, { include: Activity });
  res.json(countries);
});

router.get("/countries/name", async (req, res) => {
  const { name } = req.query;
  const countries = await Country.findAll({ where: { name } });
  res.json(countries);
});

router.post("/activities", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    let activity = await Activity.create({ name, difficulty, duration, season })
    await activity.setCountries(countries)
    
    let activities = await Activity.findOne({
      where: {
        name,
      },
      include: {
        model: { Country },
      }
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
