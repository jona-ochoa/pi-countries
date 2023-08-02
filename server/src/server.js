const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

require('./db')
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use("/api/v1", router);

module.exports = server;
