import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Added useNavigate
import axios from 'axios';

const CharacterDetails = () => {
  const { characterId } = useParams(); // Get characterId from route
  const navigate = useNavigate(); // To handle back navigation
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters/${characterId}`,
          {
            params: {
              ts: 1,
              apikey: import.meta.env.VITE_PUBLIC_KEY,
              hash: import.meta.env.VITE_HASH,
            },
          }
        );
        setCharacter(response.data.data.results[0]);
      } catch (err) {
        setError('Failed to fetch character details.');
        console.error('Error fetching character details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterDetail();
  }, [characterId]);

  if (loading) return <p>Loading character details...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!character) return <p>No character found.</p>;

  return (
    <div className="character-detail">
      {/* Back Button */}
      <button
        className="back-button"
        onClick={() => navigate(-1)} // Navigate back
      >
        Back
      </button>

      {/* Character Details */}
      <h2>{character.name}</h2>
      <div className="image-container">
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          className="character-detail-image"
        />
      </div>
      <p>{character.description || 'No description available for this character.'}</p>

      {/* Associated Comics */}
      <h3>Associated Comics</h3>
      <ul>
        {character.comics.items.length > 0 ? (
          character.comics.items.map((comic, index) => (
            <li key={index}>{comic.name}</li>
          ))
        ) : (
          <p>No comics available for this character.</p>
        )}
      </ul>
    </div>
  );
};

export default CharacterDetails;
