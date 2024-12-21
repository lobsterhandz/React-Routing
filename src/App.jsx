import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import ComicDetails from './components/ComicDetails'; // Import ComicDetails
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<BrowseCharacters />} />
          <Route path="/characters/:characterId" element={<CharacterDetails />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:comicId" element={<ComicDetails />} /> {/* Add this route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
