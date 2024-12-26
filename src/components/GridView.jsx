import React from 'react'
import { Link } from 'react-router-dom'
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
function GridView({books}) {
  return (
   <>
     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
     {
        books.map((book)=>{
    return(
  <div key={book._id} className="card bg-base-100  shadow-xl">
  <figure className='w-[90px] self-center mt-5 rounded-none'>
    <img
      src={book.image} />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-red-500">{book.name}</h2>
    <p> <span className='font-bold text-red-500'>Quantity:</span> {book.quantity}</p>
    <p>{book.description.substring(0,50)}...</p>
    <Rating
      emptySymbol=<FaRegStar className='text-yellow-600' />
      fullSymbol=<IoIosStar className='text-yellow-600' />
      fractions={1}
      initialRating={Math.floor(book.rating)}
    />
    <div className="card-actions justify-end">
      <Link to={`/update/${book._id}`}>
                  <button className='py-3 transition hover:translate-y-(-3) px-5 bg-red-500 text-white'>Update</button>
     </Link>
    </div>
  </div>
</div>
            )
        })
    }
     </div>
   </>
  )
}

export default GridView
