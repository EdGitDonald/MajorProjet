import React, {useState} from 'react'
import './Tasktracker.css'
import Taskcard from '../TaskCard/Taskcard'
import Modal from 'react-modal'

function Tasktracker() {

  //create state to control Modal
  //Lines 11-12 dictate function of open and close of adding task 
  //DO NOT DELETE
  const [isOpen, setIsOpen] =  React.useState(false)
  const [steps, setSteps] = useState([]);
  Modal.setAppElement(document.getElementById('root'));

  const handleAddStep = () => {
    setSteps((prevSteps) => [...prevSteps, '']);
  };
  

  return (
    <div className='tasktracker'>
        <div className='tasktracker-container'>
          <h2>Tasktracker</h2>
          <button onClick={()=>setIsOpen(true)}>Add Task</button>
        </div>
        <div>
            <Taskcard/>
        </div>
        
        <Modal
        isOpen={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={{
            overlay: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Set the alpha value to 1 for full opacity
              },
            content: {
                position: 'absolute',
                top: '36%',
                left: '55%',
                transform: 'translate(-50%, -50%)',
                maxWidth: '400px', // Adjust the maximum width if needed
                margin: 'auto',
              },       
        }}>
            <div className='addtask-container'>
            <button className="modal-close-btn" onClick={()=>setIsOpen(false)}>close</button>
            <form>
               <div>
                  <h2>Add Task</h2>
                  <input
                  type="text"
                  name="title"
                  id="title" 
                  placeholder='Add Title'
                  />
                </div> 
                <div className='progress-bar'></div>
                {steps.map((step, index) => (
                      <div className='step' key={index}>
                      <input 
                      type='checkbox'/>
                      <textarea
                      name="step"
                      id={`step${index}`}
                      placeholder={`Step ${index+1}`}
                      value={step}
                      onChange={(e) => {
                        const newSteps = [...steps];
                        newSteps[index] = e.target.value;
                        setSteps(newSteps);
                      }}
                      />
                  </div>

                ))}
              
                <button type='button' onClick={handleAddStep}>Add step</button>

            </form>
            

            </div>

        </Modal>
        
    </div>
  )
}

export default Tasktracker