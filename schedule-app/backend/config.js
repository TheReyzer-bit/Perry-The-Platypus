const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres', // указываем, что используем PostgreSQL
  port: 5432, // порт PostgreSQL по умолчанию
});

module.exports = sequelize;
