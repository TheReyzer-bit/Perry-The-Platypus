// src/pages/SchedulePage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SchedulePage = ({ user }) => {
  const [schedule, setSchedule] = useState([]);
  const [group, setGroup] = useState('');
  const [teacher, setTeacher] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/schedule');
        setSchedule(response.data);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };
    fetchSchedule();
  }, []);

  const handleGroupChange = (e) => {
    setGroup(e.target.value);
    // Фильтруем расписание по группе
  };

  const handleTeacherChange = (e) => {
    setTeacher(e.target.value);
    // Фильтруем расписание по преподавателю
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Логика для сохранения изменений
    setIsEditing(false);
  };

  const handleLogout = () => {
    // Логика для выхода из профиля
  };

  return (
    <div>
      <div>
        <button onClick={handleLogout}>Logout</button>
        {user.role === 'admin' && (
          <button onClick={handleEditToggle}>
            {isEditing ? 'Exit Edit Mode' : 'Enter Edit Mode'}
          </button>
        )}
      </div>
      <div>
        <select value={group} onChange={handleGroupChange}>
          <option value="">All Groups</option>
          {/* Add options for groups */}
        </select>
        <select value={teacher} onChange={handleTeacherChange}>
          <option value="">All Teachers</option>
          {/* Add options for teachers */}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {/* Render schedule blocks */}
          {schedule.map((slot, index) => (
            <tr key={index}>
              <td>{slot.time}</td>
              <td>{slot.monday}</td>
              <td>{slot.tuesday}</td>
              <td>{slot.wednesday}</td>
              <td>{slot.thursday}</td>
              <td>{slot.friday}</td>
              <td>{slot.saturday}</td>
              <td>{slot.sunday}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing && (
        <div>
          {/* Добавить логику редактирования */}
          <button onClick={handleSave}>Save Changes</button>
        </div>
      )}
    </div>
  );
};

export default SchedulePage;
