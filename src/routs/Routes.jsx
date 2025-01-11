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
import PrivateRout from "../utils/PrivateRout";

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
        element: <PrivateRout><AddBooks></AddBooks></PrivateRout>,
      },
      {
        path:"/allbooks",
        element: <PrivateRout><AllBooks></AllBooks></PrivateRout>
      },
      {
        path:"/bookdetails/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/book-data/${params.id}`, {
            credentials: 'include',
          }),
        element: <PrivateRout><BookDetails></BookDetails></PrivateRout>
      },
      {
        path:"/borrowedbooks/:email",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/borrowed/${params.email}`, {
            credentials: 'include',
          }),
        element: <PrivateRout><BorrowedBooks /></PrivateRout>
      },
      {
        path:'/bookcategory/:category',
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/book-category/${params.category}`, {
            credentials: 'include',
          }),
        element: <PrivateRout><CategoryBooks></CategoryBooks></PrivateRout>
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
        element: <PrivateRout><Update></Update></PrivateRout>
      }
    ]
  },
  {
    path:'*',
    element:<Error />
  }
]);
export default router;
