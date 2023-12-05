import { useState, useEffect } from 'react';
import '../styles/Bookshelf.css';
import Book from './Book';
import AddBookForm from './AddBookForm';
import { fetchBooksFromLocalStorage } from './StoreBooks';

const Bookshelf = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = () => {
      try {
        const localStorageBooks = fetchBooksFromLocalStorage();
        setBooks(localStorageBooks);
      } catch (error) {
        console.error('Error fetching books from local storage:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="bookshelf-container">
      <h2 className="bookshelf-title">My Library</h2>
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
