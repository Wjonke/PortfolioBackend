//placeholder migration

exports.up = function (knex) {
  return knex.schema.createTable("designs", (designs) => {
    designs.increments("id").primary();
    designs.string("design_name", 255).notNullable();
    designs.string("design_url", 255).notNullable();
    designs.string("thumbnail_url", 255).notNullable();
    designs
      .integer("storeID")
      .notNullable()
      .references("id")
      .inTable("stores")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    designs
      .integer("userID")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    designs.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("designs");
};
