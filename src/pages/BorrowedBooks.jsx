import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SectionBanner from '../components/SectionBanner';
import useAxiosSecure from '../hook/useAxiosSecure';
import { toast } from 'react-toastify';

function BorrowedBooks() {
  
  const axios=useAxiosSecure();
  const borrowedBooks = useLoaderData();
  const[books,setBooks]=useState(borrowedBooks)
  console.log(books)
  


//handle Delete
const handleDelete = async (id, bookId) => {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/delete-book/${id}`, {
      data: { bookId }, 
    });

    if (response.data.deletedCount>0) {
      toast.success('Book Returned Successfully!');

      
      const updatedBooks = books.filter((b) => b._id !== id); 
      setBooks(updatedBooks); 
    } else {
      toast.error(response.data.message);
    }
  } catch (err) {
    console.error(err);
    toast.error('Failed to return the book. Please try again.');
  }
};


  return (
    <>
      <SectionBanner title="My Borrowed Books" />
      <div className="container mx-auto">
        <table className="table table-zebra mt-10 table-xs md:table-md lg:table-lg">
          {/* Table Head */}
          <thead>
            <tr className="text-red-500">
              <th>#</th>
              <th>Book Cover</th>
              <th>Title</th>
              <th>Category</th>
              <th>Borrow Date</th>
              <th>Return Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Table Rows */}
            {books.map((book, indx) => {
              const { _id, title, coverImage, category, borrowDate, returnDate } = book;

              return (
                <tr key={_id}>
                  <th>{indx + 1}</th>
                  <td>
                    <div className="w-[70px]">
                      <img src={coverImage} alt="Book Cover" />
                    </div>
                  </td>
                  <td>{title}</td>
                  <td>{category}</td>
                  <td>{borrowDate}</td>
                  <td>{returnDate}</td>
                  <td>
                    <button onClick={()=>handleDelete(_id,book.bookId)} className="btn hover:bg-black bg-red-500 text-white">
                      Return
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BorrowedBooks;
