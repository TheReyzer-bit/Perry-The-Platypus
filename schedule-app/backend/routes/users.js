/*
const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// Получение всех пользователей
router.get('/', async (req, res) => {
  try {
    const users = await knex('users').select('*');
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Добавление нового пользователя
router.post('/', async (req, res) => {
  try {
    const newUser = await knex('users').insert(req.body).returning('*');
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Failed to add user' });
  }
});

module.exports = router;
*/
const express = require('express');
const router = express.Router();

// Пример маршрута
router.get('/', (req, res) => {
  res.send('GET request to /api/users');
});

module.exports = router;
