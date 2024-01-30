import React, { useState, useEffect } from 'react';
import './Tasktracker.css';
import Modal from 'react-modal';
import SingleTask from '../SingleTask/SingleTask';

function Tasktracker({onDueDateSelect}) {
  const [isOpen, setIsOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [assignedBy, setAssignedBy] = useState('');
  const [dueDate, setDueDate] = useState(''); 
  const [steps, setSteps] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [progress, setProgress] = useState(0);
  const [selectedDueDate, setSelectedDueDate] = useState('');

  const openModal = () => {
    setIsOpen(true);
    setNewTaskTitle('');
    setAssignedBy('');
    setDueDate('');
    setSteps([]);
    setProgress(0);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAddStep = () => {
    setSteps((prevSteps) => [...prevSteps, { taskName: '', completed: false }]);
  };

  const handleRemoveStep = (index) => {
    setSteps((prevSteps) => prevSteps.filter((_, i) => i !== index));
  };

  /* const handleCheckboxClick = (index) => {
    setSteps((prevSteps) => {
      const updatedSteps = [...prevSteps];
      updatedSteps[index] = { ...updatedSteps[index], completed: !updatedSteps[index].completed };
      return updatedSteps;
    });
  }; */

  const handleSubmit = () => {
      // Set new task title and due date in state
      setNewTaskTitle(newTaskTitle); // Assuming newTaskTitle is a state variable
      setSelectedDueDate(dueDate); // Assuming dueDate is a state variable
  
      const newTask = {
        title: newTaskTitle,
        assignedBy: assignedBy,
        dueDate: dueDate,
        steps: [...steps],
        progress: progress,
    };
      // Add the new task to the tasks array
    setTasks((prevTasks) => [...prevTasks, newTask]);
      // Pass the newTaskTitle to the Calendar component
    onDueDateSelect(dueDate, newTaskTitle);
    // Clear the newTaskTitle after submitting
    setNewTaskTitle(''); 
    // Close the modal or perform other necessary actions
    closeModal();
  };

  const removeTask = (taskToRemove) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div className='tasktracker'>
      <div className='tasktracker-container'>
        <h2>Tasktracker</h2>
        <button onClick={openModal}>Add Task</button>
      </div>

      {/* Render the list of submitted tasks */}
      <div className="tasktracker-task">
      {tasks.map((task, index) => (
      <SingleTask
        key={index}
        task={task}
        onRemove={removeTask}
        onCheckboxClick={(updatedTask) => setTasks((prevTasks) => prevTasks.map((t) => (t === task ? updatedTask : t)))}
        onDateSelect={(selectedDate, selectedDueDate, task) => onDueDateSelect(selectedDate, selectedDueDate, task)}
     />
     ))}
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            position: 'absolute',
            top: '36%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '400px',
            margin: 'auto',
          },
        }}
      >
        <div>
          <button className="modal-close-btn" onClick={closeModal}>
            Close
          </button>

          {/* Form for adding task in the modal */}
          <form>
            <div>
              <h2>Add Task</h2>
              <input
                type="text"
                name="title"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Add Title"
              />
            </div>
            <div>
            <input
              type="text"
              name="assignedBy"
              value={assignedBy}
              onChange={(e) => setAssignedBy(e.target.value)}
              placeholder="Assigned By"
            />
            </div>
            <div>
            <input
              type="text"
              name="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              placeholder="Due Date"
            />
            </div>
            <div className='progress-bar'>
              <div className='progress-bar-fill' style={{ width: `${progress}%` }}></div>
            </div>
            {steps.map((step, index) => (
              <div className='step' key={index}>
                <textarea
                  name="step"
                  placeholder={`Step ${index + 1}`}
                  value={step.taskName}
                  onChange={(e) => {
                    const newSteps = [...steps];
                    newSteps[index] = { ...newSteps[index], taskName: e.target.value };
                    setSteps(newSteps);
                  }}
                />
                <button type="button" onClick={() => handleRemoveStep(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type='button' onClick={handleAddStep}>
              Add step
            </button>
            <button type="button" onClick={handleSubmit}>
              Submit Task
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Tasktracker;






