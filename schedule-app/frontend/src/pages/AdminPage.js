import React, { useState } from 'react';
import Header from '../components/Header';
import ScheduleTable from '../components/ScheduleTable';

const AdminPage = ({ onLogout }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div className="container">
      <Header onLogout={onLogout} />
      <h2>Admin Schedule</h2>
      <button className="btn btn-secondary" onClick={toggleEditMode}>
        {isEditMode ? 'View Mode' : 'Edit Mode'}
      </button>
      <ScheduleTable isEditMode={isEditMode} />
    </div>
  );
};

export default AdminPage;
