import React, { useState } from 'react';
import './Homepage.css';
import Header from '../../Components/Header/Header';
import Tasktracker from '../../Components/Tasktracker/Tasktracker';
import Notifications from '../../Components/Notifications/Notifications';
import Calendar from '../../Components/Calendar/Calendar';
import Contacts from '../../Components/Contacts/Contacts';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Homepage() {
  const [draftedMessages, setDraftedMessages] = useState([]);
  const [selectedDueDate, setSelectedDueDate] = useState('');
  const [currentTask, setCurrentTask] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [taskTitlesByDate, setTaskTitlesByDate] = useState({});
  const [urgencyFilter, setUrgencyFilter] = useState(null);

  const handleUrgencyFilterChange = (urgency) => {
    setUrgencyFilter(urgency);
  };

  const updateDraftedMessages = (message) => {
    setDraftedMessages((prevMessages) => [...prevMessages, message]);
  };

  const removeNotification = (index) => {
    setDraftedMessages((prevMessages) => [
      ...prevMessages.slice(0, index),
      ...prevMessages.slice(index + 1),
    ]);
  };

  const onDateSelect = (date, selectedDueDate, newTaskTitle, taskTitles) => {
    const formattedDate = formatDate(date, 'yyyy-MM-dd');
    setTaskTitlesByDate((prevTitles) => ({
      ...prevTitles,
      [formattedDate]: [...(prevTitles[formattedDate] || []), newTaskTitle],
    }));
    setSelectedDueDate(selectedDueDate);
    setCurrentTask(currentTask);
    setNewTaskTitle(newTaskTitle);
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;
  
    // If there's no destination or the destination is the same as the source, do nothing
    if (!destination || destination.index === source.index) {
      return;
    }
  
    // Reorder the items based on the drag and drop result
    const reorderedItems = Array.from(items); // Assuming items is the array of draggable items
    const [draggedItem] = reorderedItems.splice(source.index, 1);
    reorderedItems.splice(destination.index, 0, draggedItem);
  
    // Update the state with the reordered items
    setItems(reorderedItems);
  };

  return (
    <div className='Homepage-container'>
      <Header />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='Homepage-display'>
          <Droppable droppableId="homepage-droppable" direction="horizontal">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className='drag-container'>
                <Draggable draggableId="tasktracker" index={0}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                       <Tasktracker
                        onDueDateSelect={(date, title, task) => {
                        setSelectedDueDate(date);
                        setCurrentTask(task);
                        setNewTaskTitle(title);
                        setTaskTitlesByDate((prevTitles) => ({
                        ...prevTitles,
                       [date]: title,
                     }));
                     }}
                    />
                    </div>
                  )}
                </Draggable>
                <Draggable draggableId="notifications" index={1}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Notifications draftedMessages={draftedMessages} removeNotification={removeNotification} urgencyFilter={urgencyFilter} handleUrgencyFilterChange={handleUrgencyFilterChange} />
                    </div>
                  )}
                </Draggable>
                <Draggable draggableId="calendar" index={2}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Calendar selectedDueDate={selectedDueDate} onDateSelect={onDateSelect} newTaskTitle={newTaskTitle} taskTitlesByDate={taskTitlesByDate} />
                    </div>
                  )}
                </Draggable>
                <Draggable draggableId="contacts" index={3}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Contacts updateDraftedMessages={updateDraftedMessages} />
                    </div>
                  )}
                </Draggable>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          </div>
      </DragDropContext>
    </div>
  );
}

export default Homepage;

