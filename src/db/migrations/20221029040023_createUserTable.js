/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users",table=>{
    table.increments('user_id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('contact_name')
    table.string('company')
    table.string('interested_in')
    table.string('budget')
    table.string('technologies')
    table.text('description')
    table.timestamps(true,true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
