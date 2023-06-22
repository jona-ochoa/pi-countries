const { Activity, Country } = require("../../db");

const getActivity = async () => {

  const allActivities = await Activity.findAll({ include: Country });
  
  const filterActivity = allActivities.map((e) => e.name.toLowerCase());

  const result = filterActivity.filter((item, index) => {
    return filterActivity.indexOf(item) === index;
  });
  return result
};

module.exports = {
  getActivity,
};
