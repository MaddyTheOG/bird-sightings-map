import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0', display: 'flex', gap: '1rem' }}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/habitats">Habitats</Link>
    <Link to="/conservation">Conservation</Link>
    <Link to="/art">Art</Link>
  </nav>
);

export default Navbar;
