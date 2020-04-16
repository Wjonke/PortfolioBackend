const knex = require("knex");

const knexConfig = require("../knexfile");

const dbEnv = process.env.DB_ENV || "development";
//sets Heroku to whats in its env var env, else its going to be stuck in development, not to be confused with NODE_ENV ;)
module.exports = knex(knexConfig[dbEnv]);
