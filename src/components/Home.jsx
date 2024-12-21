import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Marvel Comic Book Library</h1>
      <p>Explore Marvel's characters, comics, and stories!</p>
      <div className="home-buttons">
        <Link to="/browse-characters" className="home-button">Browse Characters</Link>
        <Link to="/comics" className="home-button">Explore Comics</Link>
      </div>
    </div>
  );
};

export default Home;
