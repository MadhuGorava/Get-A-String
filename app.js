const express = require("express");
const Express = express();

Express.get("/", (request, response) => {
  response.send("Express Js");
});

module.exports = Express;
