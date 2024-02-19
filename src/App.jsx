import { useState } from 'react'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotificationCentre from './Pages/NotificationsCentre/NotificationCentre'
import Header from './Components/Header/Header'



function App() {
  return (

    <BrowserRouter>
       <Header />
     <Routes>
       <Route path='/' element={<Homepage/>}/>
       <Route path='/NotificationCentre' element={<NotificationCentre/>}/>
     </Routes>
    </BrowserRouter>
   
  )
  }

export default App
