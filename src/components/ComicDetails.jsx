import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ComicDetails = () => {
  const { comicId } = useParams(); // Get comicId from route
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComicDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/comics/${comicId}`,
          {
            params: {
              ts: 1,
              apikey: import.meta.env.VITE_PUBLIC_KEY,
              hash: import.meta.env.VITE_HASH,
            },
          }
        );
        setComic(response.data.data.results[0]);
      } catch (err) {
        setError('Failed to fetch comic details.');
        console.error('Error fetching comic details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchComicDetail();
  }, [comicId]);

  if (loading) return <p>Loading comic details...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!comic) return <p>No comic found.</p>;

  return (
    <div className="comic-detail">
      <h2>{comic.title}</h2>
      <div className="image-container">
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
          className="comic-detail-image"
        />
      </div>
      <p>{comic.description || 'No description available for this comic.'}</p>

      <h3>Creators</h3>
      <ul>
        {comic.creators.items.length > 0 ? (
          comic.creators.items.map((creator, index) => (
            <li key={index}>{creator.name} - {creator.role}</li>
          ))
        ) : (
          <p>No creators listed for this comic.</p>
        )}
      </ul>

      <Link to="/comics" className="back-button">
        Back to Comics
      </Link>
    </div>
  );
};

export default ComicDetails;
