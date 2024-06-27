// backend/db/knex.js

const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development); // Используем конфигурацию для development окружения

module.exports = db;
