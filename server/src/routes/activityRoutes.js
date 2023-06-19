const { Router } = require("express");
const {
  getActivityHandler,
} = require("../handlers/activityHandlers");
const getActivityRoutes = Router();

getActivityRoutes.get("/", getActivityHandler);

module.exports = getActivityRoutes
