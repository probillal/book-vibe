import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../Context/BookProvider";

const BooksDetails = () => {
  const { id } = useParams();
  //   console.log("params", id);
  const books = useLoaderData();
  //   console.log("Books data", books);
  const expectedBook = books.find((book) => book.bookId == id);
  //   console.log(expectedBook);
  const {
    author,
    bookId,
    bookName,
    image,
    publisher,
    rating,
    review,
    category,
    tags,
    totalPages,
    yearOfPublishing,
  } = expectedBook;
  const { handleMarkAsRead, handleWishList } = useContext(BookContext);
  console.log(handleMarkAsRead, handleWishList, "bookContext");

  return (
    <div className="grid md:grid-cols-2 bg-base-100 shadow-sm container mx-auto gap-15 mt-10">
      <figure className="flex items-center justify-center bg-gray-100">
        <img src={image} className="h-[400px]" alt={bookName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl font-bold">{bookName}</h2>
        <p className="text-xl">By: {author}</p>
        <p className=" border-y border-gray-300">{category}</p>
        <p>
          {" "}
          <span className="font-bold">Review:</span> {review}
        </p>
        <div className="flex items-center gap-3">
          <h2 className="font-bold">Tag:</h2>{" "}
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge text-green-500 bg-green-100 font-semibold"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 space-y-3">
          <div className="mt-4 flex justify-between items-center">
            <span>Number of pages:</span>{" "}
            <span className="font-bold">{totalPages}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Publisher:</span>{" "}
            <span className="font-bold">{publisher}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Year of publishing:</span>{" "}
            <span className="font-bold">{yearOfPublishing}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Rating:</span> <span className="font-bold">{rating}</span>
          </div>
          <div className="mt-4">
            <button
              className="btn border mr-4"
              onClick={() => handleMarkAsRead(expectedBook)}
            >
              Mark as Read
            </button>
            <button
              className="btn btn-success"
              onClick={() => handleWishList(expectedBook)}
            >
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
