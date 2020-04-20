//placeholder migration

exports.up = function (knex) {
  return knex.schema.createTable("projects", (projects) => {
    projects.increments("id").primary();
    projects.string("name", 255).notNullable();
    projects.string("deployed_url", 255).notNullable();
    projects.string("code_url", 255).notNullable();
    projects.string("img_url", 255).notNullable();
    projects.string("description", 1000).notNullable();
    projects.string("role", 500).notNullable();
    projects.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
