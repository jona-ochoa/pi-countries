const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const http = require("http");
const cors = require("cors");

require('./db')
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors({origin: "https://pi-countries-gules.vercel.app"}));

server.use("api/v1", router);

const app = http.createServer(server);

module.exports = app;
