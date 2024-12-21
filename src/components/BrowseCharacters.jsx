import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BrowseCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Marvel Characters
  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters`,
        {
          params: {
            ts: 1,
            apikey: import.meta.env.VITE_PUBLIC_KEY,
            hash: import.meta.env.VITE_HASH,
            limit: 30,
            offset,
          },
        }
      );

      const results = response.data.data.results;

      if (results.length === 0) {
        setHasMore(false);
      } else {
        // Ensure unique keys for each character
        const uniqueCharacters = Array.from(
          new Map(
            [...characters, ...results].map((character) => [
              character.id,
              character,
            ])
          ).values()
        );

        setCharacters(uniqueCharacters);
      }
    } catch (error) {
      setError('Failed to fetch characters. Please try again later.');
      console.error('Error fetching characters:', error);
    } finally {
      setLoading(false);
    }
  };

  // Initial Fetch & Pagination
  useEffect(() => {
    fetchCharacters();
  }, [offset]);

  const handleNext = () => {
    if (hasMore && !loading) {
      setOffset((prevOffset) => prevOffset + 30);
    }
  };

  // Render Error
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="browse-characters">
      {/* Grid of Characters */}
      <div className="character-grid">
        {characters.map((character) => (
          <Link
            key={character.id} // Unique key based on `character.id`
            to={`/characters/${character.id}`}
            className="character-item"
          >
            <img
              src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <p>{character.name}</p>
          </Link>
        ))}
      </div>

      {/* Loading Indicator */}
      {loading && <p className="loading">Loading characters...</p>}

      {/* Pagination Button */}
      {!loading && hasMore && (
        <button className="next-button" onClick={handleNext}>
          Load More
        </button>
      )}

      {/* No More Data */}
      {!hasMore && <p className="no-more">No more characters to display.</p>}
    </div>
  );
};

export default BrowseCharacters;
