const db = require("../../database/db-config");

module.exports = {
  find,
};

function find() {
  return db(projects).select("*");
}
//add call to github later for projects if needed or hard code them
