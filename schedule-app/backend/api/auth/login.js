// backend/login.js

const express = require('express');
const router = express.Router();

// Пример базы данных пользователей
const users = [
  { id: 1, login: 'admin', password: '$2b$10$N9qo8uLOickgx2ZMRZo5i.ej5OprYx6GrRx2qkJiZT3pDbpFzVFSO' }, // пароль: admin123
  { id: 2, login: 'teacher', password: '$2b$10$7sC9/2A9v/OPH6k7zQDhKeE2HlSsyy1P6VzrOg60Ys5OknsF.ZPui' },
  { id: 3, login: 'student', password: '$2b$10$RV0F5g1IcO/BYKpEFh8s9uOFl3I2KI7M6z2uR1EV8lb5j3xH8F84O' }
];

// POST запрос на аутентификацию
router.post('/login', (req, res) => {
  const { login, password } = req.body;

  // Поиск пользователя по логину
  const user = users.find(u => u.login === login);

  // Проверка пароля
  if (user && password === user.password) {
    // В случае успеха возвращаем успешный статус и данные пользователя
    return res.status(200).json({ id: user.id, login: user.login, role: user.role });
  } else {
    // В случае ошибки возвращаем статус 401 (Unauthorized)
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
