const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");

//////    import Router files    //////
// const authRouter = require("./crudOperations/auth/authRouter");
const skillsRouter = require("./crudOperations/skills/skillsRouter");
const projectsRouter = require("./crudOperations//projects/projectsRouter");

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
// server.use("/api/auth", authRouter);
server.use("/api/skills", skillsRouter);
server.use("/api/projects", projectsRouter);

//testing that the server works
server.get("/", (req, res) => {
  res.status(200).json({ status: "The Portfolio server is running!!" });
});

module.exports = server;
