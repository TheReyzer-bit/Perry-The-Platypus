/*import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        login,
        password
      });
      console.log('Login successful:', response.data);
      // Дополнительные действия после успешного входа, например, перенаправление на другую страницу
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid credentials');
    }
  };
 if (isLoggedIn) {
    return <Redirect to="/index" />; // Перенаправление на страницу /home после успешного входа
  }
  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
*/
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response = await axios.post('http://localhost:5000/api/auth/login', {
 //const response = await axios.post('http://localhost:5000/routes/auth', {
        username,
        password,
      });
      console.log('Login successful:', response.data);
      setIsLoggedIn(true); // Установите флаг успешного входа
    } catch (error) {
      console.error('Login error:', error);
      setLoginError(error.message); // или error.response.data.message, если сервер возвращает детали ошибки
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/index" />; // Перенаправление на страницу /home после успешного входа
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {loginError && <p>{loginError}</p>}
    </div>
  );
};

export default LoginPage;
