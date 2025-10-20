import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import des pages
import Form from './pages/Form';
import Game from './pages/Game';
import LoseGame from './pages/LoseGame';
import LoseSpin from './pages/LoseSpin';
import OneParticipation from './pages/OneParticipation';
import SelectGame from './pages/SelectGame';
import Spins from './pages/Spins';
import Termine from './pages/Termine';
import Wait from './pages/Wait';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/select-game" element={<SelectGame />} />
          <Route path="/game/:url" element={<Game />} />
          <Route path="/spins/:destination" element={<Spins />} />
          <Route path="/lose-game/:url" element={<LoseGame />} />
          <Route path="/lose-spin" element={<LoseSpin />} />
          <Route path="/one-participation" element={<OneParticipation />} />
          <Route path="/wait" element={<Wait />} />
          <Route path="/termine" element={<Termine />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;