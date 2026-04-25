import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBook, setStoredBook] = useState([]);
  const [storedWishlist, setStoredWishlist] = useState([]);
  const handleMarkAsRead = (currentBook) => {
    console.log("book", currentBook);

    const isExistBook = storedBook.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("The book is already exist!");
    } else {
      setStoredBook([...storedBook, currentBook]);
      toast.success(`${currentBook.bookName} is added to list!`);
    }
  };
  const handleWishList = (currentBook) => {
    console.log("book", currentBook);
    const isExistInReadList = storedBook.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInReadList) {
      toast.error("The book is already exist in read list");
      return;
    }
    const isExistWishlist = storedWishlist.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistWishlist) {
      toast.error("The book is already exist");
    } else {
      setStoredWishlist([...storedWishlist, currentBook]);
      toast.success(`${currentBook.bookName} is added to list`);
    }
  };
  const data = {
    handleMarkAsRead,
    storedBook,
    setStoredBook,
    handleWishList,
    setStoredWishlist,
    storedWishlist,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
