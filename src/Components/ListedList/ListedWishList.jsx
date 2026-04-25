import { useContext } from "react";
import { BookContext } from "../../Context/BookProvider";
import BooksCard from "../Ui/BooksCard";

const ListedWishList = () => {
  const { storedWishlist } = useContext(BookContext);
  console.log(storedWishlist);
  if (storedWishlist.length === 0) {
    return (
      <div className="bg-gray-200 flex items-center justify-center h-[50vh]">
        <h2 className="text-3xl font-extrabold ">No Wish List is Found</h2>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {storedWishlist.map((book, index) => (
        <BooksCard key={index} book={book}></BooksCard>
      ))}
    </div>
  );
};

export default ListedWishList;
