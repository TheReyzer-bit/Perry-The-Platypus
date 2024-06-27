import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TeacherPage from './pages/TeacherPage'; // Замените на импорт страницы учителя
import StudentPage from './pages/StudentPage'; // Замените на импорт страницы студента
import AdminPage from './pages/AdminPage'; // Замените на импорт страницы администратора

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
