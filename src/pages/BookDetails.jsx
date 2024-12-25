import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import SectionBanner from '../components/SectionBanner';
import { Fade } from 'react-awesome-reveal';

function BookDetails() {
  const loadDetails=useLoaderData();
  
 
  return (
    <>
    <SectionBanner title="See Details" />
    <Fade>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="col-span-12 md:col-span-4 flex justify-center">
          <img
            className="w-full max-w-[300px] max-h-[500px] object-cover"
            src={loadDetails?.image}
            alt="book"
          />
        </div>
        <div className="col-span-12 md:col-span-8 space-y-5">
          <h3 className="font-semibold text-red-500 text-2xl">{loadDetails?.name}</h3>
          <p>
            <span className="font-semibold text-red-500">By:</span> {loadDetails?.author}
          </p>
          <p>
            <span className="font-semibold text-red-500 ">Quantity:</span> {loadDetails?.quantity}
          </p>
          <p>
            <span className="font-semibold text-red-500 ">Genre:</span> {loadDetails?.book_category}
          </p>
          <p>{loadDetails?.content}</p>
          <button className='bg-red-500 text-white py-3 px-8 hover:bg-black'>Borrow Book</button>
        </div>
      </div>
    </div>
    </Fade>
  </>
  
  )
}

export default BookDetails