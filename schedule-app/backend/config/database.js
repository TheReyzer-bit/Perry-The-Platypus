const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432, // порт по умолчанию для PostgreSQL
});

module.exports = sequelize;
