import { Route, Routes } from 'react-router-dom';
import './App.css'
import NoticePage from './pages/NoticePage';
import SiteHeader from './components/Header';
import EventPage from './pages/EventPage';
import { useState } from 'react';

function App() {
  const [isEvents,setIsEvent] = useState(0);
  const [isNotice,setIsNotice] = useState(0);
  return (
    <Routes>
     <Route path='/' element={<SiteHeader isEvents={isEvents} setIsEvent={setIsEvent} isNotice={isNotice} setIsNotice={setIsNotice} />} />
     <Route path='/event' element={<EventPage isEvents={isEvents} setIsEvent={setIsEvent} isNotice={isNotice} setIsNotice={setIsNotice} />} />
     <Route path='/notice' element={<NoticePage isEvents={isEvents} setIsEvent={setIsEvent} isNotice={isNotice} setIsNotice={setIsNotice} />} />
    </Routes>
  );
}

export default App
