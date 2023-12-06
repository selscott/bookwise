import { useState, useEffect } from 'react';
import '../styles/Bookshelf.css';
import Book from './Book';

const Bookshelf = ({ shelfId, books, onEditBook }) => {
  const [shelfBooks, setShelfBooks] = useState(books || []);

  useEffect(() => {
    setShelfBooks(books || []);
  }, [books]);

  return (
    <div className="bookshelf-container">
      <div className="bookshelf">
        <div className="book-grid">
          {shelfBooks.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              coverImage={book.coverImage}
              book={book}
              onEdit={(editedBook) => onEditBook(book.id, editedBook, shelfId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
