// backend/queries.js
const db = require('./db');

// Получить всех пользователей
const getUsers = async () => {
  const res = await db.query('SELECT * FROM users');
  return res.rows;
};

// Добавить нового пользователя
const createUser = async (firstName, secondName, role, login, password, groupId) => {
  const res = await db.query(
    'INSERT INTO users (first_name, second_name, role, login, password, id_group) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [firstName, secondName, role, login, password, groupId]
  );
  return res.rows[0];
};

// Другие CRUD операции...

module.exports = {
  getUsers,
  createUser,
  // Другие экспортируемые функции...
};
