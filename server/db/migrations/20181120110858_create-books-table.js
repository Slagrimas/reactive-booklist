
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', table => {
      table.increments();
      table.string('title', 200).notNullable();
      table.string('author', 120).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
