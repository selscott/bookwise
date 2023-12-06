import { useState } from 'react';
import '../styles/Book.css';
import EditBookForm from './EditBookForm';

const Book = ({ id, coverImage, book, onEdit }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <>
      <div className="book" onClick={() => setShowEditForm(true)} style={{ cursor: 'pointer' }} >
        <img className="book-cover" src={coverImage} alt="Book Cover" />
      </div>

      {showEditForm && (
        <EditBookForm
          book={book}
          onSave={(editedBook) => {
            onEdit(id, editedBook);
            setShowEditForm(false);
          }}
        />
      )}
    </>
  );
};

export default Book;
