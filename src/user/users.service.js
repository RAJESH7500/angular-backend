const knex  = require('../db/connection')

function list()
{
    return knex('users').select(['users.user_id','users.first_name','users.last_name', 'users.interested_in'])
}

function create(user) {
  return knex("users")
    .insert(user)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

function read(userId)
{
    return knex('users').select('*').where({user_id:userId}).first();
}

function update(updatedUser) {
  return knex("users")
    .select("*")
    .where({ user_id: updatedUser.user_id })
    .update(updatedUser, "*")
    .then((updatedRecords) => updatedRecords[0]);
}

function destroy(user_id) {
  return knex("users").where({ user_id }).del();
}

module.exports={
    list, read, create,update, destroy
}