import { useContext } from "react";
import { BookContext } from "../../Context/BookProvider";

const Books = () => {
  const { storedBook, storedWishlist } = useContext(BookContext);
  console.log(storedBook);
  return (
    <div className="container mx-auto">
      <h2>Read List: {storedBook.length}</h2>
      <h2>Wish List: {storedWishlist.length}</h2>
    </div>
  );
};

export default Books;
