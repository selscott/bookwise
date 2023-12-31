import { useState } from 'react';
import '../styles/Book.css';
import EditBookForm from './EditBookForm';

const Book = ({ id, coverImage, book, onEdit, onDelete }) => {
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
            onEdit(editedBook);
            setShowEditForm(false);
          }}
          onDelete={onDelete}
        />
      )}
    </>
  );
};

export default Book;
