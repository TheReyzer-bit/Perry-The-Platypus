import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SchedulePage from './pages/SchedulePage';

const App = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/schedule" element={<SchedulePage editMode={editMode} setEditMode={setEditMode} />} />
      </Routes>
    </Router>
  );
};

export default App;
