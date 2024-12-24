import React from 'react'
import { Link } from 'react-router-dom'
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

function TableView({books}) {
  return (
    <>
       <div className="overflow-x-auto">
  <table className="table table-zebra mt-10 table-xs md:table-md lg:table-lg">
    {/* head */}
    <thead>
      <tr className='text-red-500'>
        <th></th>
        <th>Book Cover</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Ratings</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        books.map((book,indx)=>{
            const{name,author,image,book_category,rating,_id}=book
            return(
                <tr key={_id}>
        <th>{indx+1}</th>
        <td>
            <div className='w-[70px]'>
                <img src={image} alt="book" />
            </div>
        </td>
        <td>{name}</td>
        <td>{author}</td>
        <td>{book_category}</td>
        <td>
        <Rating
  emptySymbol=<FaRegStar className='text-yellow-600' />
  fullSymbol=<IoIosStar className='text-yellow-600' />
  fractions={1}
  initialRating={Math.floor(rating)}
/>
        </td>
        <td>
            <Link to={`/update/${book._id}`}>
            <button className='btn bg-red-500 text-white'>Update</button>
            </Link>
        </td>
      </tr>
            )
        })
      }
     
    </tbody>
  </table>
</div>
    </>
  )
}

export default TableView