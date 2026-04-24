import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Books from "../Pages/Books/Books";
import Error from "../Pages/Error/Error";
import Banner from "../Pages/Banner/Banner";
import BooksDetails from "../Pages/BookDetails/BooksDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "banner",
        Component: Banner,
      },
      {
        path: "books",
        Component: Books,
      },
      {
        path: "bookDetails/:id",
        Component: BooksDetails,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <Error></Error>,
  },
]);
