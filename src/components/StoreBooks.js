const fetchBooksFromLocalStorage = () => {
  try {
    const storedShelves = localStorage.getItem('shelves');
    const shelves = storedShelves ? JSON.parse(storedShelves) : [];
    
    const firstShelf = shelves[0] || {};
    const books = firstShelf.books || [];

    return books;
  } catch (error) {
    console.error('Error fetching books from local storage:', error);
    return [];
  }
};
  
export { fetchBooksFromLocalStorage };
