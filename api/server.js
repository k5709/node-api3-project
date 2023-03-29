const express = require("express");
const { logger } = require("./middleware/middleware");
const server = express();
const userRouter = require("./users/users-router");

// remember express by default cannot parse JSON in request bodies
server.use(express.json());

server.use(logger);

server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  console.log(req.body);
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
