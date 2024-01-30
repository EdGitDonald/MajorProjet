// Import necessary functions from date-fns
import React, { useState } from 'react';
import { startOfWeek, addDays, subWeeks, addWeeks, format as formatDateFns, parse } from 'date-fns';
import './Calendar.css';

// Function to format the due date based on different formats
const formatDate = (dueDate, format) => {
  try {
    if (!dueDate) {
      console.error('Due date is undefined or empty');
      return '';
    }

    // Create a Date object directly from the dueDate string
    const parsedDueDate = new Date(dueDate);

    // Check if the parsedDueDate is a valid date
    if (isNaN(parsedDueDate.getTime())) {
      console.error('Error parsing due date:', dueDate);
      return '';
    }

    const year = format.includes('yyyy') ? formatDateFns(parsedDueDate, 'yyyy') : formatDateFns(new Date(), 'yyyy');
    const month = format.includes('MM') ? formatDateFns(parsedDueDate, 'MM') : formatDateFns(new Date(), 'MM');
    return formatDateFns(parsedDueDate, format.replace(/yyyy/g, year).replace(/MM/g, month));
  } catch (error) {
    console.error('Error formatting due date:', dueDate);
    console.error(error);
    return '';
  }
};

const Calendar = ({ selectedDueDate, onDateSelect, task }) => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const weekStart = startOfWeek(currentWeek, { weekStartsOn: 1 }); // Start on Monday (1)

  const days = Array.from({ length: 5 }, (_, index) => addDays(weekStart, index));

  const goToPreviousWeek = () => {
    setCurrentWeek(subWeeks(currentWeek, 1));
  };

  const goToNextWeek = () => {
    setCurrentWeek(addWeeks(currentWeek, 1));
  };

  return (
    <div className="Calendar">
      <h2>Calendar</h2>
      <div className="Week-container">
        <button onClick={goToPreviousWeek}>Previous Week</button>
        {days.map((day, index) => (
          <div
            className="Day"
            key={index}
            onClick={() => {
              console.log('Clicked date:', day);
              console.log('Selected due date:', selectedDueDate);
              console.log('Task title:', task?.title);
              onDateSelect(day, selectedDueDate, task?.title); // Use optional chaining
            }}
          >
            <p>{formatDateFns(day, 'EEEE')}</p>
            <p>{formatDateFns(day, 'd')}</p>
            {selectedDueDate && formatDate(selectedDueDate, 'yyyy-MM-dd') === formatDateFns(day, 'yyyy-MM-dd') && (
              <span>{task?.title}</span>
            )}
          </div>
        ))}
        <button onClick={goToNextWeek}>Next Week</button>
      </div>
    </div>
  );
};

export default Calendar;








