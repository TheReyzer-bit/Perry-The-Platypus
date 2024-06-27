import React from 'react';
import Header from '../components/Header';
import ScheduleTable from '../components/ScheduleTable';

const TeacherPage = ({ onLogout }) => {
  return (
    <div className="container">
      <Header onLogout={onLogout} />
      <h2>Teacher Schedule</h2>
      <ScheduleTable />
    </div>
  );
};

export default TeacherPage;
