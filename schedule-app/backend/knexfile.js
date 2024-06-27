// backend/knexfile.js

module.exports = {
  development: {
    client: 'pg',                      // Используем PostgreSQL
    connection: {
      host: 'localhost',
      user: 'your_database_user',      // Пользователь вашей БД
      password: 'your_database_password',  // Пароль пользователя БД
      database: 'your_database_name'   // Название вашей БД
    },
    migrations: {
      directory: './db/migrations'     // Директория для миграций
    },
    seeds: {
      directory: './db/seeds'          // Директория для начальных данных (seeds)
    }
  }
};
