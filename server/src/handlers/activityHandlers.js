const { getActivity } = require("../controllers/Activity/getActivity");
const { postActivity } = require("../controllers/Activity/postActivity");

const postActivityHandler = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  try {
    const newPost = await postActivity(
      name,
      difficulty,
      duration,
      season,
      countries
    );
    if(newPost.length < 0){
    res.status(200).json(newPost);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getActivityHandler = async (req, res) => {
  try {
    const activities = await getActivity();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postActivityHandler,
  getActivityHandler,
};
