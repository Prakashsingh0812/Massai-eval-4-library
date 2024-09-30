import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BookDetails.css';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://openlibrary.org/works/${id}.json`);
        setBook(response.data);
      } catch (err) {
        setError('Error fetching book details');
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleSearch = async () => {
    if (searchTerm.trim() === '') return;
    setSearchLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}`);
      setSearchResults(response.data.docs);
    } catch (err) {
      setError('Error fetching search results');
    } finally {
      setSearchLoading(false);
    }
  };

  const selectBook = async (bookId: string) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://openlibrary.org/works/${bookId}.json`);
      setBook(response.data);
      setSearchResults([]); // Clear search results
      setSearchTerm(''); // Clear search input
    } catch (err) {
      setError('Error fetching book details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="book-details">
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      {searchLoading && <p>Searching...</p>}
      {error && <p className="error-message">{error}</p>}
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result) => (
            <div key={result.key} className="search-result" onClick={() => selectBook(result.key.split('/').pop())}>
              <h3>{result.title}</h3>
              {result.author_name && <p>Author: {result.author_name.join(', ')}</p>}
            </div>
          ))}
        </div>
      )}
      {book ? (
        <div className="book-info">
          {book.cover_id && (
            <img
              className="book-cover"
              src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
              alt={book.title}
            />
          )}
          <div className="book-content">
            <h1 className="book-title">{book.title}</h1>
            <p className="book-description">{book.description ? book.description.value : 'No description available'}</p>
            <p className="book-authors">
              Author: {book.authors ? book.authors.map((author: any) => author.name).join(', ') : 'Unknown'}
            </p>
          </div>
        </div>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default BookDetails;
