// src/components/Header.jsx
// including navbar
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../app.css';

const Header = () => {
  return (
    <header className="app-header">
      <h1>Marvel Comic Book Library</h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink
          to="/characters"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Browse Characters
        </NavLink>
        <NavLink
          to="/comics"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Comics
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
