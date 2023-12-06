import { useState } from 'react';
import { Form, ToggleButton, ButtonGroup } from 'react-bootstrap';

const AddBookForm = () => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    pageNumbers: '',
    coverImage: '',
    notes: '',
    rating: 1,
    format: 'print',
    startDate: '',
    endDate: '',
    readingStatus: 'To Be Read',
    currentPage: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const ratings = [
    { name: '★', value: '1' },
    { name: '★★', value: '2' },
    { name: '★★★', value: '3' },
    { name: '★★★★', value: '4' },
    { name: '★★★★★', value: '5' },
  ];

  const formats = ['print', 'ebook', 'audiobook'];

  const readingStatusOptions = ['Read', 'Currently Reading', 'To Be Read'];

  const handleRadioChange = (name, value) => {
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewBook({
      title: '',
      author: '',
      genre: '',
      pageNumbers: '',
      coverImage: '',
      notes: '',
      rating: 1,
      format: 'print',
      startDate: '',
      endDate: '',
      readingStatus: 'To Be Read',
      currentPage: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          value={newBook.title}
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
          value={newBook.author}
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
          value={newBook.genre}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formPageNumbers">
        <Form.Label>Page Numbers</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter page numbers"
          name="pageNumbers"
          value={newBook.pageNumbers}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formCoverImage">
        <Form.Label>Cover Image URL</Form.Label>
        <Form.Control
          type="url"
          placeholder="Enter cover image URL"
          name="coverImage"
          value={newBook.coverImage}
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
          value={newBook.notes}
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
              checked={newBook.rating === rating.value}
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
              checked={newBook.format === format}
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
          value={newBook.startDate}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formEndDate">
        <Form.Label>End Date</Form.Label>
        <Form.Control
          type="date"
          name="endDate"
          value={newBook.endDate}
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
              checked={newBook.readingStatus === status}
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
          value={newBook.currentPage}
          onChange={handleInputChange}
        />
      </Form.Group>
    </Form>
  );
};

export default AddBookForm;
