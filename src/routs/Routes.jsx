import {
  createBrowserRouter,
 
} from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import AddBooks from "../pages/AddBooks";
import AllBooks from "../pages/AllBooks";
import BookDetails from "../pages/BookDetails";
import BorrowedBooks from "../pages/BorrowedBooks";
import CategoryBooks from "../pages/CategoryBooks";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Register from "../pages/Register";
import Update from "../pages/Update"
import useAxiosSecure from "../hook/useAxiosSecure";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:"/addbooks",
        element: <AddBooks></AddBooks>,
      },
      {
        path:"/allbooks",
        element:<AllBooks></AllBooks>
      },
      {
        path:"/bookdetails/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/book-data/${params.id}`, {
            credentials: 'include',
          }),
        element: <BookDetails></BookDetails>
      },
      {
        path:"/borrowedbooks",
        element: <BorrowedBooks />
      },
      {
        path:'/bookcategory/:category',
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/book-category/${params.category}`, {
            credentials: 'include',
          }),
        element: <CategoryBooks></CategoryBooks>
      },
      {
        path:'/login',
        element: <Login />
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path:"/update/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/book-data/${params.id}`, {
            credentials: 'include',
          }),
        element: <Update></Update>
      }
    ]
  },
  {
    path:'*',
    element:<Error />
  }
]);
export default router;
