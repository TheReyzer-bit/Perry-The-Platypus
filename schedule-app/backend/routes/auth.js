const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User'); // Замените на вашу модель пользователя

// Маршрут для входа пользователя
router.post('/login', async (req, res) => {
  const { login, password } = req.body;

  try {
    // Находим пользователя по логину
    const user = await User.findOne({ login });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Проверяем пароль
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Генерируем JWT токен
    const payload = {
      user: {
        id: user.id,
        role: user.role // Можно добавить другие данные пользователя в токен
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET, // Замените на ваш секретный ключ для подписи токена
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
