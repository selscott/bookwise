const fetchBooksFromLocalStorage = (shelfId) => {
  try {
    const storedShelves = localStorage.getItem('shelves');
    const shelves = storedShelves ? JSON.parse(storedShelves) : [];
    
    const targetShelf = shelves.find((shelf) => shelf.shelfId === shelfId) || {};
    const books = targetShelf.books || [];

    return books;
  } catch (error) {
    console.error('Error fetching books from local storage:', error);
    return [];
  }
};

export { fetchBooksFromLocalStorage };
