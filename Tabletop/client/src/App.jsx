import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage'
import About from './Components/Information/About'
import Privacy from './Components/BoringLegalStuff/privacy'
import CreateMenu from './Components/Create/CreateMenu';
import PlayerSheet from './Components/PlayerSheets/PlayerSheet';
import Spells from './Components/Spells/Spells';

import {Header, Navbar, Footer} from './Components/UI'

function App() {
  return (
    <>

    <Routes>
      <Route path="/*" element={<Homepage />} />
      <Route path="/spells" element={<Spells />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/create" element={<CreateMenu />} />
      <Route path="/playersheet" element={<PlayerSheet />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App
