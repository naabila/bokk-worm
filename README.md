
# Library Management System 

## Purpose
The Library Management System is a user-friendly web application designed for a well-renowned school to efficiently manage its library resources. The system allows users to browse, borrow, and return books, while administrators can add, update, and categorize books. It features a modern design, responsive layout, and secure authentication.

## Live URL
https://book-worm-3ae7b.web.app/

## Key Features

1. **Responsive Design**
   - Fully responsive across mobile, tablet, and desktop devices.

2. **Home Page**
   - Attractive banner/slider with meaningful information.
   - Book Categories section featuring clickable cards to navigate to specific book categories.
   - Two additional meaningful sections.

3. **Book Management**
   - Add Book: A private route allowing users to add new books with details like title, author, rating, and category.
   - Update Book: A private route for updating book information.
   - All Books: Displays all books with a filter to show available books and toggle views between cards and tables.

4. **Borrowing and Returning**
   - Borrow a book with dynamic quantity management using MongoDB’s `$inc` operator.
   - Return books with real-time updates to book quantities.
   - Prevent multiple borrowings of the same book by the same user until returned.

5. **Authentication**
   - Login and Register with email/password and Google/GitHub authentication.
   - Private routes for secured access to restricted pages.
   - JWT-based authentication for enhanced security.

6. **Dynamic Features**
   - Dynamic website title changes based on the route.
   - Toast notifications for CRUD operations.
   - Loading spinners for a seamless user experience.

7. **Error Handling**
   - 404 Page for invalid routes.

## npm Packages Used

- **React Router DOM**: For routing and navigation.
- **Firebase**: For authentication and hosting.
- **React-Toastify/SweetAlert**: For notifications.
- **React-Rating-Stars-Component**: To display book ratings.
- **Axios**: For API calls.
- **JWT-decode**: For managing and decoding JWT tokens.



