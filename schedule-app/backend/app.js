/*const express = require('express');
const sequelize = require('./config/database');
const User = require('./models/user');
const cors = require('cors'); // Убедитесь, что у вас установлен пакет cors
const app = express();

// Используйте cors middleware
app.use(cors());

// Другие настройки и маршруты

// Пример обработчика POST запроса для /api/auth/login
app.post('/api/auth/login', (req, res) => {
  // Логика аутентификации
  res.status(200).json({ message: 'Login successful' });
});
async function initialize() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Синхронизация моделей с базой данных
    await sequelize.sync({ alter: true }); // или force: true для пересоздания таблиц

    // Дополнительные настройки и маршруты Express
    // app.use(...);

    app.listen(5000, () => {
      console.log('Server is running on http://localhost:5000');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

initialize();
*/
// backend/app.js

// backend/app.js

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const authRoutes = require('./routes/authRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/schedule', scheduleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
