import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Habitats from './pages/Habitats';
import Conservation from './pages/Conservation';
import Art from './pages/Art';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/habitats" element={<Habitats />} />
        <Route path="/conservation" element={<Conservation />} />
        <Route path="/art" element={<Art />} />
      </Routes>
    </Router>
  );
}

export default App;
