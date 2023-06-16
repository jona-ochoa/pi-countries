const { Activity, Country } = require("../../db");

const getActivity = async () => {

  const allActivities = await Activity.findAll({ include: Country });
  const filterA = allActivities.map((e) => e.name.toLowerCase());

  const total = filterA.filter((item, index) => {
    return filterA.indexOf(item) === index;
  });
  return total
};

module.exports = {
  getActivity,
};
