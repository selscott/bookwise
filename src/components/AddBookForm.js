import { useState } from 'react';
import { fetchBooksFromLocalStorage, addBookToLocalStorage } from './StoreBooks';

const AddBookForm = ({ setBooks }) => {
  const [newBook, setNewBook] = useState({
    id: Date.now(),
    title: '',
    author: '',
    coverImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewBook((prevBook) => ({
      ...prevBook,
      coverImage: URL.createObjectURL(file),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      addBookToLocalStorage(newBook);
      console.log('Book added successfully to local storage');
  
      const updatedBooks = fetchBooksFromLocalStorage();
  
      setBooks(updatedBooks);
  
      setNewBook({
        id: Date.now(),
        title: '',
        author: '',
        coverImage: null,
      });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };  

  return (
    <div className="add-book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={newBook.title} onChange={handleInputChange} required />
        </label>
        <label>
          Author:
          <input type="text" name="author" value={newBook.author} onChange={handleInputChange} required />
        </label>
        <label>
          Cover Image:
          <input type="file" accept="image/*" name="coverImage" onChange={handleFileChange} required />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
