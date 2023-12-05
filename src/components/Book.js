import '../styles/Book.css';

const Book = ({ coverImage }) => {
  return (
    <div className="book">
      <img src={coverImage} alt="Book Cover" className="book-cover" />
    </div>
  );
};

export default Book;
