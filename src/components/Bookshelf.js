import { useState, useEffect } from 'react';
import '../styles/Bookshelf.css';
import Book from './Book';
import { fetchBooksFromLocalStorage } from './StoreBooks';

const Bookshelf = ({ shelfId }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = () => {
      try {
        const shelfBooks = fetchBooksFromLocalStorage(shelfId);
        setBooks(shelfBooks);
      } catch (error) {
        console.error('Error fetching books from local storage:', error);
      }
    };

    fetchBooks();
  }, [shelfId]);

  return (
    <div className="bookshelf-container">
      <div className="bookshelf">
        <div className="book-grid">
          {books.map((book) => (
            <Book key={book.id} coverImage={book.coverImage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
