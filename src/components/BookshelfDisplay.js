import { useState } from 'react';
import '../styles/BookshelfDisplay.css';
import Bookshelf from './Bookshelf';
import AddBookForm from './AddBookForm';
import { Button, Modal, Form } from 'react-bootstrap';

const BookshelfDisplay = ({ shelves, setShelves }) => {
  const [showEditShelfModal, setShowEditShelfModal] = useState(false);
  const [editedShelfName, setEditedShelfName] = useState('');
  const [selectedShelfId, setSelectedShelfId] = useState(null);

  const [showAddBookModal, setShowAddBookModal] = useState(false);

  const handleEditShelf = (shelfId, shelfName) => {
    setSelectedShelfId(shelfId);
    setEditedShelfName(shelfName);
    setShowEditShelfModal(true);
  };

  const handleSaveEditedShelf = () => {
    setShelves((prevShelves) =>
      prevShelves.map((shelf) =>
        shelf.id === selectedShelfId ? { ...shelf, name: editedShelfName } : shelf
      )
    );
    setEditedShelfName('');
    setSelectedShelfId(null);
    setShowEditShelfModal(false);
  };

  const handleAddBook = (shelfId, newBook) => {
    setShelves((prevShelves) =>
      prevShelves.map((shelf) =>
        shelf.id === shelfId ? { ...shelf, books: [...(shelf.books || []), newBook] } : shelf
      )
    );
    setShowAddBookModal(false);
  };

  return (
    <div>

      {shelves.map((shelf) => (
        <div className="collection" key={shelf.id}>
          <div className="collection-header">
            <h2>{shelf.name}</h2>
            <div className="action-buttons">
              <Button variant="outline-light" onClick={() => handleEditShelf(shelf.id, shelf.name)}>
                Edit
              </Button>
              <Button
                variant="outline-light"
                onClick={() => {
                  setSelectedShelfId(shelf.id);
                  setShowAddBookModal(true);
                }}
              >
                Add Book
              </Button>
            </div>
          </div>
          <Bookshelf shelfId={shelf.id} />
        </div>
      ))}

      <Modal show={showEditShelfModal} onHide={() => setShowEditShelfModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Bookshelf Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formShelfName">
              <Form.Label>Shelf Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter shelf name"
                value={editedShelfName}
                onChange={(e) => setEditedShelfName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditShelfModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEditedShelf}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAddBookModal} onHide={() => setShowAddBookModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddBookForm shelfId={selectedShelfId} onAddBook={handleAddBook} />
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default BookshelfDisplay;
