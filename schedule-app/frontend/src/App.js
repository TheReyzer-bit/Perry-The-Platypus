import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { TeacherPage, StudentPage, AdminPage } from './pages';
import LoginPage from './pages/LoginPage';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('');

  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setRole(role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setRole('');
  };

  return (
    <Router>
      <div>
        <Routes>
          {!isAuthenticated ? (
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          ) : (
            <>
              {role === 'admin' && <Route path="/admin" element={<AdminPage onLogout={handleLogout} />} />}
              {role === 'teacher' && <Route path="/teacher" element={<TeacherPage onLogout={handleLogout} />} />}
              {role === 'student' && <Route path="/student" element={<StudentPage onLogout={handleLogout} />} />}
              <Route path="/" element={<Navigate to={`/${role}`} />} />
            </>
          )}
          <Route path="*" element={<Navigate to={isAuthenticated ? `/${role}` : '/login'} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
