import { FaRegStar } from "react-icons/fa";

const BooksCard = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-sm my-4">
      <figure>
        <img src={book.image} className="h-[280px] p-2" alt={book.bookName} />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          {book.tags.map((tag, index) => (
            <div
              key={index}
              className="badge text-green-500 bg-green-100 font-semibold"
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
        <p className="text-xl">By: {book.author}</p>
        <div className="border-t border-dashed border-gray-300"></div>
        <div className="card-actions justify-between items-center text-xl">
          <div>{book.category}</div>
          <div className="flex gap-1 items-center">
            {book.rating} <FaRegStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
