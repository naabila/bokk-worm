import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import SectionBanner from '../components/SectionBanner';
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from '../utils/AuthProvider';
import useAxiosSecure from '../hook/useAxiosSecure';
import { toast } from 'react-toastify';

function BookDetails() {
  const{user}=useContext(AuthContext);
  const loadDetails=useLoaderData();
  const [quantity, setQuantity] = useState(loadDetails?.quantity);
const axios=useAxiosSecure();

  
  //borrow book function
  const handleBorrowBook=async(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const userName=form.userName.value;
    const borrowDate=new Date().toLocaleDateString();
    const returnDate=form.returnDate.value;
    const coverImage=loadDetails?.image;
    const title=loadDetails?.name;
    const category=loadDetails?.book_category;
    const bookId=loadDetails?._id;

    const borrowData={
  email,
userName,
borrowDate,
returnDate,
coverImage,
title,
category,
bookId
}
console.log(borrowData)
//post borrow data
try{
  axios.post(`${import.meta.env.VITE_API_URL}/borrow-books`, borrowData)
  .then(res=>{
    const updatedQuantity = quantity - 1; 
      setQuantity(updatedQuantity);
      toast.success("Book borrowed successfully!")
  })
}catch(err){
console.log(err)
}




//close modal
    document.getElementById('borrow-book').close()
  }
 
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
            <span className="font-semibold text-red-500 ">Quantity:</span> {quantity}
          </p>
          <p>
            <span className="font-semibold text-red-500 ">Genre:</span> {loadDetails?.book_category}
          </p>
          <p>{loadDetails?.content}</p>
          <button 
          onClick={()=>document.getElementById('borrow-book').showModal()} 
          disabled={quantity === 0}
          className='bg-red-500 text-white py-3 px-8 hover:bg-black'>Borrow Book</button>
        </div>
      </div>
    </div>
    </Fade>

    {/* modal */}
    

<dialog id="borrow-book" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box text-center">
    <h3  className="font-bold text-lg text-red-500">Borrow Book</h3>
   <div>
   <form onSubmit={handleBorrowBook}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
          defaultValue={user?.email}
          disabled
          name='email'
          type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Borrower Name</span>
          </label>
          <input type="text"
          defaultValue={user?.displayName}
          disabled
          name='userName'
           placeholder="password" className="input input-bordered" required />
          
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Return date</span>
          </label>
          <input type="date"
          
          name='returnDate'
           placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-500 hover:bg-black text-white rounded-none">Borrow</button>
        </div>
      </form>
   </div>
    
  </div>
</dialog>
  </>
  
  )
}

export default BookDetails