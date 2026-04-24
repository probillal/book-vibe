import { use } from "react";
import BooksCard from "../Ui/BooksCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());
const AllBooks = () => {
  const books = use(booksPromise);
  console.log("books", books);
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto mt-5">
        {books.map((book, index) => (
          <BooksCard key={index} book={book}></BooksCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
