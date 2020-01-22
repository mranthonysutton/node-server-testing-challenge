exports.up = function(knex) {
  return knex.schema.createTable("books", tbl => {
    tbl.increments();
    tbl.string("title").notNullable();
    tbl.string("author").notNullable();
    tbl.integer("pages");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("books");
};
