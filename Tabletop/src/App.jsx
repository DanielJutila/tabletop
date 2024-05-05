import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Homepage from './Components/Homepage/Homepage'
import About from './Components/Information/About'
import Privacy from './Components/BoringLegalStuff/privacy'

import {Header, Navbar, Footer} from './Components/UI'

function App() {
  return (
    <>
    <Header />
    <Navbar/>
    <Routes>
      <Route path="/*" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>

    <Footer />
    </>
  );
}

export default App
