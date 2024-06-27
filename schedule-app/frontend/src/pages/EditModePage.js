// EditModePage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditModePage = () => {
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/schedule/${id}`);
      fetchSchedule(); // Refresh schedule after deletion
    } catch (error) {
      console.error('Error deleting schedule item:', error);
    }
  };

  const handleEdit = async (id, updatedSchedule) => {
    try {
      await axios.put(`/api/schedule/${id}`, updatedSchedule);
      fetchSchedule(); // Refresh schedule after edit
    } catch (error) {
      console.error('Error editing schedule item:', error);
    }
  };

  const handleAdd = async (newScheduleItem) => {
    try {
      await axios.post('/api/schedule', newScheduleItem);
      fetchSchedule(); // Refresh schedule after addition
    } catch (error) {
      console.error('Error adding schedule item:', error);
    }
  };

  return (
    <div>
      <h2>Edit Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            <th>Time Start</th>
            <th>Weekday</th>
            <th>Group</th>
            <th>Teacher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item) => (
            <tr key={item.id}>
              <td>{item.subject}</td>
              <td>{item.date}</td>
              <td>{item.time_start}</td>
              <td>{item.weekday}</td>
              <td>{item.group.name_group}</td>
              <td>{item.teacher.first_name} {item.teacher.second_name}</td>
              <td>
                <button onClick={() => handleEdit(item.id, { ...item, subject: 'New Subject' })}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditModePage;
