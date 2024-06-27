import React, { useState } from 'react';

const ScheduleTable = ({ isEditMode }) => {
  // Пример данных расписания
  const [schedule, setSchedule] = useState([
    { day: 'Monday', time: '08:00', group: 'Group 1', subject: 'Math' },
    { day: 'Tuesday', time: '10:00', group: 'Group 2', subject: 'Physics' },
    // Добавьте другие данные расписания здесь
  ]);

  const renderTable = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return days.map(day => (
      <tr key={day}>
        <th>{day}</th>
        {schedule
          .filter(item => item.day === day)
          .map((item, index) => (
            <td key={index}>
              {item.time} - {item.group} - {item.subject}
              {isEditMode && (
                <div>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              )}
            </td>
          ))}
      </tr>
    ));
  };

  return (
    <div>
      <div className="filters">
        <select>
          <option>Group 1</option>
          <option>Group 2</option>
          {/* Добавьте другие группы здесь */}
        </select>
        <select>
          <option>Teacher 1</option>
          <option>Teacher 2</option>
          {/* Добавьте других преподавателей здесь */}
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
