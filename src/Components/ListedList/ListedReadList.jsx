import { useContext } from "react";
import { BookContext } from "../../Context/BookProvider";
import BooksCard from "../Ui/BooksCard";

const ListedReadList = () => {
  const { storedBook } = useContext(BookContext);
  console.log(storedBook);
  if (storedBook.length === 0) {
    return (
      <div className="bg-gray-200 flex items-center justify-center h-[50vh]">
        <h2 className="text-3xl font-extrabold ">No Read List is Found</h2>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {storedBook.map((book, index) => (
        <BooksCard key={index} book={book}></BooksCard>
      ))}
    </div>
  );
};

export default ListedReadList;
