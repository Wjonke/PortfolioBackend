const db = require("../../database/db-config");

module.exports = {
  find,
};

function find() {
  return db("projects").select("*");
}
