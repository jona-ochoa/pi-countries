const { Router } = require("express");
const {
  getCountryHandler,
  getDetailHandler,
} = require("../handlers/countryHandlers");

const countryRoutes = Router();

countryRoutes.get("/", getCountryHandler);

countryRoutes.get("/:id", getDetailHandler);

module.exports = countryRoutes;
