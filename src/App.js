import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';
import BookshelfDisplay from './components/BookshelfDisplay';

function App() {
  useEffect(() => {
    document.title = 'BookWise';
  }, []);

  const [showAddShelfModal, setShowAddShelfModal] = useState(false);
  const [newShelfName, setNewShelfName] = useState('');
  const [shelves, setShelves] = useState(() => {
    const storedShelves = localStorage.getItem('shelves');
    return storedShelves ? JSON.parse(storedShelves) : [{ shelfId: 1, name: 'My Library', books: [] }];
  });

  useEffect(() => {
    localStorage.setItem('shelves', JSON.stringify(shelves));
  }, [shelves]);

  const handleAddShelf = () => {
    if (newShelfName.trim() !== '') {
      const newShelf = { shelfId: Date.now(), name: newShelfName, books: [] };
      setShelves((prevShelves) => [...prevShelves, newShelf]);
      setNewShelfName('');
      setShowAddShelfModal(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>BookWise</h1>
        <Button variant="outline-light" size="lg" onClick={() => setShowAddShelfModal(true)}>
          Add Collection
        </Button>
        <Modal show={showAddShelfModal} onHide={() => setShowAddShelfModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Collection</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formShelfName">
                <Form.Label>Collection Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Favorite Books"
                  value={newShelfName}
                  onChange={(e) => setNewShelfName(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAddShelfModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddShelf}>
              Add Collection
            </Button>
          </Modal.Footer>
        </Modal>
      </header>
      <main>
        <BookshelfDisplay shelves={shelves} setShelves={setShelves} />
      </main>
    </div>
  );
}

export default App;
