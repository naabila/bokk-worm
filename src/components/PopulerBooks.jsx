import React from 'react'
import SectionHeadings from './SectionHeadings'
import { FaRegStar } from 'react-icons/fa'
import Rating from 'react-rating'
import { IoIosStar } from 'react-icons/io'
import { Link } from 'react-router-dom'

function PopulerBooks({ populerBooks }) {
  return (
    <>
      <SectionHeadings title="Reader's Choise" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
        {
          populerBooks.map((book) => {
            return (
              <div key={book._id} className="card bg-base-100 shadow-xl">
                <figure className='w-[90px] self-center mt-5 rounded-none'>
                  <img src={book.coverImage} alt={book.name} />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-red-500">{book.name}</h2>
                  <p> <span className='font-bold text-red-500'>{book.title}</span> </p>
                  {/* Check if book.description exists */}
                  <p>{book.category}</p>
                  <Rating
                    emptySymbol={<FaRegStar className='text-yellow-600' />}
                    fullSymbol={<IoIosStar className='text-yellow-600' />}
                    fractions={1}
                    initialRating={Math.floor(book.rating)}
                  />
                  <div className="card-actions justify-end">
                    <Link to={`/bookdetails/${book.bookId}`}>
                      <button className='py-3 transition hover:translate-y-(-3) px-5 bg-red-500 text-white'>Details</button>
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

export default PopulerBooks
