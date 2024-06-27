import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScheduleTable = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetchSchedule();
  }, []);

  const fetchSchedule = async () => {
    try {
      const response = await axios.get('/api/schedule');
      setSchedule(response.data);
    } catch (error) {
      console.error('Error fetching schedule:', error);
    }
  };

  return (
    <div>
      <h2>Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Weekday</th>
            <th>Date</th>
            <th>Time Start</th>
            <th>Subject</th>
            <th>Group</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map(item => (
            <tr key={item.id}>
              <td>{item.weekday}</td>
              <td>{item.date}</td>
              <td>{item.time_start}</td>
              <td>{item.subject}</td>
              <td>{item.id_group}</td>
              <td>{item.id_teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
