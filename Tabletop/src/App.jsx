import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Homepage from './Components/Homepage/Homepage'
import About from './Components/Information/About'

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Homepage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App
