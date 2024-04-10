import React, { useState } from 'react';
import { startOfWeek, addDays, subWeeks, addWeeks, format as formatDateFns } from 'date-fns';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
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

const Calendar = ({ selectedDueDate, onDateSelect, newTaskTitle, taskTitlesByDate }) => {
    const [currentWeek, setCurrentWeek] = useState(new Date());
  
    const weekStart = startOfWeek(currentWeek, { weekStartsOn: 1 });
    const days = Array.from({ length: 5 }, (_, index) => addDays(weekStart, index));
  
    const goToPreviousWeek = () => {
      setCurrentWeek(subWeeks(currentWeek, 1));
    };
  
    const goToNextWeek = () => {
      setCurrentWeek(addWeeks(currentWeek, 1));
    };
  
    return (
      <div className='Calendar'>
        <h2>Calendar</h2>
        <div className='Week-container'>
          <button onClick={goToPreviousWeek}><FaAngleLeft/></button>
          {days.map((day, index) => {
            const formattedDate = formatDate(day, 'yyyy-MM-dd');
            const taskTitles = taskTitlesByDate[formattedDate] || [];
            const isSelected = selectedDueDate && formatDateFns(selectedDueDate, 'yyyy-MM-dd') === formattedDate;
  
            return (
              <div
                className={`Day ${isSelected ? 'selected' : ''}`}
                key={index}
                onClick={() => onDateSelect(day, selectedDueDate, newTaskTitle, taskTitles)}
              >
                <p>{formatDateFns(day, 'EEEE')}</p>
                <p>{formatDateFns(day, 'd')}</p>
                {taskTitles.map((taskTitle, taskIndex) => (
                  <span key={taskIndex}>{taskTitle}</span>
                ))}
                {isSelected && newTaskTitle && !taskTitles.includes(newTaskTitle) && <span>{newTaskTitle}</span>}
              </div>
            );
          })}
          <button onClick={goToNextWeek}><FaAngleRight/></button>
          <div className='meeting-container'>
          <p>Set Meeting</p>
          <button>+</button>
          

        </div>
        </div>
      </div>
      
    );
  };
  
  export default Calendar;