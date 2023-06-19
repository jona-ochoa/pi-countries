const { Activity, Country } = require("../../db");

const postActivity = async (name, difficulty, duration, season, countries) => {
  const post = await Activity.create({ name, difficulty, season, duration });
  await post.setCountries(countries);

  let activityWithCountry = await Activity.findOne({
    where: { name: name },
    attributes: {
      exclude: ["updatedAt", "createdAt"],
    },
    include: {
      model: Country,
      through: {
        attributes: [],
      },
    },
  });

  res.json(activityWithCountry);
};

module.exports = {
  postActivity,
};
