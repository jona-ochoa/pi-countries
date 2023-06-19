const { Router } = require("express");
const { postActivityHandler } = require("../handlers/activityHandlers");
const postActivityRoutes = Router();

postActivityRoutes.post("/", postActivityHandler);

module.exports = postActivityRoutes
