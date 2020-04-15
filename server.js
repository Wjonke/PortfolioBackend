const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");

//////    import Router files    //////
//fix these paths when they get created
// const authRouter = require("./authOperations/authRouter");
// const skillsRouter = require("./crudOperations/userOperations/userRouter");
// const projectsRouter = require("./crudOperations/storeOperations/storeRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);

//  pass this in cors if having bad cors issues

// {
//   origin: true,
//   credentials: true
// }

//////    Use routers    ///////
//fix the paths when they get created
// server.use("/api/auth", authRouter);
// server.use("/api/users", skillsRouter);
// server.use("/api/stores", projectsRouter);

//testing that the server works
server.get("/", (req, res) => {
  res.status(200).json({ status: "The Portfolio server is running!!" });
});

module.exports = server;
