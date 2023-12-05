import '../styles/BookshelfDisplay.css';
import Bookshelf from './Bookshelf';

const BookshelfDisplay = ({ shelves }) => {
  return (
    <div>
      {shelves.map((shelf) => (
        <div className="collection" key={shelf.id}>
          <h2>{shelf.name}</h2>
          <Bookshelf shelfId={shelf.id} />
        </div>
      ))}
    </div>
  );
};

export default BookshelfDisplay;
