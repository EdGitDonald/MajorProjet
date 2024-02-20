import { useState } from 'react'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotificationCentre from './Pages/NotificationsCentre/NotificationCentre'
import Header from './Components/Header/Header'
import TaskManager from './Pages/TaskManager/TaskManager'



function App() {
  const [draftedMessages, setDraftedMessages] = useState([]);
  const [tasks, setTasks] = useState([]);


  return (

    <BrowserRouter>
       <Header />
     <Routes>
       <Route path='/' element={<Homepage draftedMessages={draftedMessages} setDraftedMessages={setDraftedMessages} />}/>
       <Route path='/NotificationCentre' element={<NotificationCentre draftedMessages={draftedMessages}/>}/>
       <Route path='/TaskManager' element={<TaskManager tasks={tasks}/>}/>
     </Routes>
    </BrowserRouter>
   
  )
  }

export default App
