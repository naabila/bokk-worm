import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import SectionBanner from '../components/SectionBanner';
import SectionHeadings from '../components/SectionHeadings';
import Rating from 'react-rating';
import { FaRegStar } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import DynamicTitle from '../components/DynamicTitle';

function CategoryBooks() {
  const loadBooks=useLoaderData();
  const[books,setBooks]=useState(loadBooks)
  
  return (
   <>
    <SectionBanner title="Book Category" />
    <DynamicTitle title="Category" />
    <div className="container mx-auto">
      <SectionHeadings title='Explore Books Of Your Favourite Category' />
      {/* book cards */}
      {
        books.length>0?(
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {
        books?.map((book)=>{
           return(
            <div key={book._id} className="card bg-base-100  shadow-xl">
            <figure className='w-[90px] self-center mt-5 rounded-none'>
              <img
                src={book.image} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-red-500">{book.name}</h2>
              <p> <span className='font-bold'>By:</span> {book.author}</p>
              <p> <span className='font-bold'>Category:</span> {book.book_category}</p>
              <p> <span className='font-bold'>Quantity:</span> {book.quantity}</p>
              <Rating
                emptySymbol=<FaRegStar className='text-yellow-600' />
                fullSymbol=<IoIosStar className='text-yellow-600' />
                fractions={1}
                initialRating={Math.floor(book.rating)}
              />
              <div className="card-actions justify-end">
                <Link to={`/bookdetails/${book._id}`}>
                            <button className='py-3 transition hover:translate-y-(-3) px-5 bg-red-500 text-white'>See Details</button>
               </Link>
              </div>
            </div>
          </div>
           )
        })
      }
          </div>
        ):(
          <p>Loading Books</p>
        )
      }
    </div>
   </>
  )
}

export default CategoryBooks