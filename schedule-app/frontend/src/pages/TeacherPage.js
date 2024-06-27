import React, { useState } from 'react';
import Header from '../components/Header';
import ScheduleTable from '../components/ScheduleTable';

const TeacherPage = ({ onLogout }) => {
  const [schedule, setSchedule] = useState([
    { time: '08:00-09:00', Понедельник: { group: 'A', subject: 'Math' }, Вторник: null, Среда: null, Четверг: null, Пятница: null, Суббота: null },
    { time: '09:00-10:00', Понедельник: null, Вторник: { group: 'B', subject: 'Physics' }, Среда: null, Четверг: null, Пятница: null, Суббота: null },
    // Add more time slots as needed
  ]);

  return (
    <div className="container">
      <Header onLogout={onLogout} />
      <h2>Teacher Schedule</h2>
      <ScheduleTable schedule={schedule} isEditMode={false} />
    </div>
  );
};

export default TeacherPage;
