import { useState } from 'react';
import { Modal, Button, Form, ToggleButton, ButtonGroup } from 'react-bootstrap';

const EditBookForm = ({ book, onSave, onDelete }) => {
  const [editedBook, setEditedBook] = useState(book);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const ratings = [
    { name: '★', value: '1' },
    { name: '★★', value: '2' },
    { name: '★★★', value: '3' },
    { name: '★★★★', value: '4' },
    { name: '★★★★★', value: '5' },
  ];

  const formats = ['Print', 'eBook', 'Audiobook'];

  const readingStatusOptions = ['Read', 'Currently Reading', 'To Be Read'];

  const handleRadioChange = (name, value) => {
    setEditedBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedBook);
  };

  return (
    <Modal show={true} onHide={() => onSave(null)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              value={editedBook.title}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter author"
              name="author"
              value={editedBook.author}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGenre">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter genre"
              name="genre"
              value={editedBook.genre}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formPageNumbers">
            <Form.Label>Page Numbers</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter page numbers"
              name="pageNumbers"
              value={editedBook.pageNumbers}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formCoverImage">
            <Form.Label>Cover Image URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter cover image URL"
              name="coverImage"
              value={editedBook.coverImage}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter notes"
              name="notes"
              value={editedBook.notes}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formRating">
            <Form.Label>Rating</Form.Label>
            <ButtonGroup>
              {ratings.map((rating, idx) => (
                <ToggleButton
                  key={idx}
                  id={`rating-${idx}`}
                  type="radio"
                  variant="outline-primary"
                  name="rating"
                  value={rating.value}
                  checked={editedBook.rating === rating.value}
                  onChange={() => handleRadioChange('rating', rating.value)}
                >
                  {rating.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Form.Group>

          <Form.Group controlId="formFormat">
            <Form.Label>Format</Form.Label>
            <ButtonGroup>
              {formats.map((format, idx) => (
                <ToggleButton
                  key={idx}
                  id={`format-${idx}`}
                  type="radio"
                  variant="outline-primary"
                  name="format"
                  value={format}
                  checked={editedBook.format === format}
                  onChange={() => handleRadioChange('format', format)}
                >
                  {format}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Form.Group>

          <Form.Group controlId="formStartDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              value={editedBook.startDate}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formEndDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              value={editedBook.endDate}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formReadingStatus">
            <Form.Label>Reading Status</Form.Label>
            <ButtonGroup>
              {readingStatusOptions.map((status, idx) => (
                <ToggleButton
                  key={idx}
                  id={`status-${idx}`}
                  type="radio"
                  variant="outline-primary"
                  name="readingStatus"
                  value={status}
                  checked={editedBook.readingStatus === status}
                  onChange={() => handleRadioChange('readingStatus', status)}
                >
                  {status}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Form.Group>

          <Form.Group controlId="formCurrentPage">
            <Form.Label>Current Page</Form.Label>
            <Form.Control
              type="number"
              name="currentPage"
              value={editedBook.currentPage}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => onDelete(editedBook.id)}>
          Delete
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditBookForm;