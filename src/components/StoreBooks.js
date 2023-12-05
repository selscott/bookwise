const fetchBooksFromLocalStorage = () => {
    const storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
  };
  
const addBookToLocalStorage = (newBookData) => {
  const storedBooks = fetchBooksFromLocalStorage();
  const updatedBooks = [...storedBooks, newBookData];
  localStorage.setItem('books', JSON.stringify(updatedBooks));
};
  
export { fetchBooksFromLocalStorage, addBookToLocalStorage };
