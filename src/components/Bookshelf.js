import { useState, useEffect } from 'react';
import '../styles/Bookshelf.css';
import Book from './Book';

const Bookshelf = ({ shelfId, books }) => {
  const [shelfBooks, setShelfBooks] = useState(books || []);

  useEffect(() => {
    setShelfBooks(books || []);
  }, [books]);

  return (
    <div className="bookshelf-container">
      <div className="bookshelf">
        <div className="book-grid">
          {shelfBooks.map((book) => (
            <Book key={book.id} coverImage={book.coverImage} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
