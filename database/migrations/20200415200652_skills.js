//placeholder migration

exports.up = function (knex) {
  return knex.schema.createTable("skills", (skills) => {
    skills.increments("id").primary();
    skills.string("name", 255).notNullable();
    skills.string("imgUrl", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("skills");
};
