import React from 'react';
import Header from '../components/Header';
import ScheduleTable from '../components/ScheduleTable';

const StudentPage = ({ onLogout }) => {
  return (
    <div className="container">
      <Header onLogout={onLogout} />
      <h2>Student Schedule</h2>
      <ScheduleTable />
    </div>
  );
};

export default StudentPage;
