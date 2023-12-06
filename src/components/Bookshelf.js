import { useState, useEffect, useCallback } from 'react';
import '../styles/Bookshelf.css';
import Book from './Book';

const Bookshelf = ({ shelfId, books, onEditBook }) => {
  const booksPerShelf = 4;
  const singleShelfHeight = 266;
  const initialShelfHeight = 532;

  const [shelfBooks, setShelfBooks] = useState(books || []);
  const [shelfHeight, setShelfHeight] = useState(initialShelfHeight);

  const updateShelfHeight = useCallback(() => {
    const numberOfShelves = Math.ceil(shelfBooks.length / booksPerShelf);
    const newShelfHeight =
      numberOfShelves <= 2 ? initialShelfHeight : numberOfShelves * singleShelfHeight;
    setShelfHeight(newShelfHeight);
  }, [shelfBooks, booksPerShelf, singleShelfHeight, initialShelfHeight]);


  useEffect(() => {
    setShelfBooks(books || []);
    updateShelfHeight();
  }, [books, updateShelfHeight]);
  

  return (
    <div className="bookshelf-container">
      <div className="bookshelf" style={{ height: `${shelfHeight}px` }}>
        <div className="book-grid">
          {shelfBooks.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              coverImage={book.coverImage}
              book={book}
              onEdit={(editedBook) => {
                onEditBook(book.id, editedBook, shelfId);
                updateShelfHeight();
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
