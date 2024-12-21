import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const fetchComics = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/comics`,
        {
          params: {
            ts: 1,
            apikey: import.meta.env.VITE_PUBLIC_KEY,
            hash: import.meta.env.VITE_HASH,
            limit: 20,
            offset,
          },
        }
      );

      const results = response.data.data.results;

      if (results.length === 0) {
        setHasMore(false);
      } else {
        const uniqueComics = Array.from(
          new Map([...comics, ...results].map((comic) => [comic.id, comic])).values()
        );
        setComics(uniqueComics);
      }
    } catch (error) {
      setError('Failed to fetch comics. Please try again later.');
      console.error('Error fetching comics:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComics();
  }, [offset]);

  const handleNext = () => {
    if (hasMore && !loading) {
      setOffset((prevOffset) => prevOffset + 20);
    }
  };

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="comics">
      <h2>Marvel Comics</h2>
      <div className="comics-grid">
        {comics.map((comic) => (
          <Link
            key={comic.id}
            to={`/comics/${comic.id}`}
            className="comic-item"
          >
            <img
              src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
            <p>{comic.title}</p>
          </Link>
        ))}
      </div>

      {loading && <p>Loading comics...</p>}

      {!loading && hasMore && (
        <button className="next-button" onClick={handleNext}>
          Load More
        </button>
      )}

      {!hasMore && <p className="no-more">No more comics to display.</p>}
    </div>
  );
};

export default Comics;
