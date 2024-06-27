import React from 'react';
import { Link } from 'react-router-dom';
import ScheduleTable from '../components/ScheduleTable';

const AdminPage = () => {
  return (
    <div>
      <h2>Admin Page</h2>
      <ScheduleTable />

      {/* Добавление кнопок и действий для редактирования */}
      <Link to="/edit-mode">Switch to Edit Mode</Link>
      {/* Другие кнопки и действия */}
    </div>
  );
};

export default AdminPage;
