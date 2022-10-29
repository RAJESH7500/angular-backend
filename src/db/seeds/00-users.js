const users = require("../fixture/users");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("users").insert(users);
    });
};