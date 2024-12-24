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
        path:"/bookdetails",
        element: <BookDetails></BookDetails>
      },
      {
        path:"/borrowedbooks",
        element: <BorrowedBooks />
      },
      {
        path:'bookcategory',
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
        loader:({params})=>fetch(`${import.meta.env.API_URL}/${params.id}`),
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
