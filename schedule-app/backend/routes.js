// backend/routes.js
const express = require('express');
const router = express.Router();
const queries = require('./queries');

// Маршрут для получения всех пользователей
router.get('/users', async (req, res) => {
  try {
    const users = await queries.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Маршрут для добавления нового пользователя
router.post('/users', async (req, res) => {
  const { firstName, secondName, role, login, password, groupId } = req.body;
  try {
    const newUser = await queries.createUser(firstName, secondName, role, login, password, groupId);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Другие маршруты...

module.exports = router;
