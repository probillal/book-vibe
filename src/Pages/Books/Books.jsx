import { useContext } from "react";
import { BookContext } from "../../Context/BookProvider";

const Books = () => {
  const { storedBook } = useContext(BookContext);
  console.log(storedBook);
  return (
    <div>
      <h2>Listed Book</h2>
    </div>
  );
};

export default Books;
