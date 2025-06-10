// Main entry: src/App.jsx
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

// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex gap-4">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/habitats">Habitats</Link>
    <Link to="/conservation">Conservation</Link>
    <Link to="/art">Art</Link>
  </nav>
);

export default Navbar;

// pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const EBIRD_API = 'https://api.ebird.org/v2/data/obs/US/recent';
const TOKEN = 'YOUR_EBIRD_API_KEY';

const Home = () => {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    fetch(EBIRD_API, {
      headers: { 'X-eBirdApiToken': TOKEN },
    })
      .then(res => res.json())
      .then(data => setSightings(data.slice(0, 100)))
      .catch(err => console.error('eBird API error', err));
  }, []);

  return (
    <div className="h-screen">
      <MapContainer center={[39.5, -98.35]} zoom={4} className="h-full w-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {sightings.map((sighting, idx) => (
          <Marker
            key={idx}
            position={[sighting.lat, sighting.lng]}
          >
            <Tooltip>
              <div>
                <strong>{sighting.comName}</strong>
                <br />
                {sighting.locName}
                <br />
                {new Date(sighting.obsDt).toLocaleString()}
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Home;

// pages/About.jsx
import React from 'react';
export default () => <div className="p-4">This project uses the eBird API to display real-time bird sightings across North America.</div>;

// pages/Habitats.jsx
import React from 'react';
export default () => <div className="p-4">Explore different bird habitats and what makes them unique.</div>;

// pages/Conservation.jsx
import React from 'react';
export default () => <div className="p-4">Learn about bird conservation efforts and how you can help.</div>;

// pages/Art.jsx
import React from 'react';
export default () => <div className="p-4">Discover bird-inspired artwork from around the world.</div>;
