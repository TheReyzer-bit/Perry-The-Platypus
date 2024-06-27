import React from 'react';
import { useSelector } from 'react-redux'; // Пример использования Redux для управления состоянием

const ScheduleTable = ({ editMode }) => {
  const schedule = useSelector((state) => state.schedule);

  return (
    <table>
      {/* Заголовки таблицы с днями недели */}
      <thead>
        <tr>
          <th>Понедельник</th>
          <th>Вторник</th>
          <th>Среда</th>
          <th>Четверг</th>
          <th>Пятница</th>
        </tr>
      </thead>
      {/* Тело таблицы с блоками занятий */}
      <tbody>
        {schedule.map((daySchedule, index) => (
          <tr key={index}>
            {daySchedule.map((lesson, lessonIndex) => (
              <td key={lessonIndex}>
                <div>
                  <div>{lesson.time}</div>
                  <div>{lesson.groupNumber}</div>
                  <div>{lesson.subject}</div>
                  {/* Дополнительные поля для редактирования в режиме администратора */}
                  {editMode && (
                    <div>
                      <button>Редактировать</button>
                      <button>Удалить</button>
                    </div>
                  )}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleTable;
