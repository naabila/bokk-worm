import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import SectionBanner from '../components/SectionBanner'
import useAxiosSecure from '../hook/useAxiosSecure'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Update() {
const loadBook=useLoaderData();
const navigate=useNavigate();
const[updateBook,setUpdateBook]=useState(loadBook);
console.log(updateBook)
const axios=useAxiosSecure();

//Update books
const handleUpdateBook=async(e)=>{
e.preventDefault();
const image=e.target.image.value;
const name=e.target.name.value;
const author=e.target.authorName.value;
const book_category=e.target.category.value;
const rating=e.target.rating.value;
const bookData={image,
  name,
  author,
  book_category,
  rating}
console.log(bookData)

//update book
try{
  const data=await axios.put(`${import.meta.env.VITE_API_URL}/update-book/${updateBook._id}`,bookData)
.then(res=>{
  if(res.data.modifiedCount){
    toast.success("Book updated successfully");
    navigate("/allbooks")
  }else{
    toast.error("error updating book")
  }
})
}catch(err){
console.log(err)
}
}

  return (
    <>
    <SectionBanner title='Update Book' />
      <div className="container mx-auto">
      
         <Fade>
                {/* form */}
              <form
              onSubmit={handleUpdateBook}
              className=" mx-auto p-6 shadow-lg rounded-lg border max-w-[800px]"
              
            >
              <h2 className="text-2xl font-bold text-center mb-6">Update Book</h2>
        
              {/* Image Upload */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Upload Book Cover Image</span>
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={updateBook.image}
                  className="file-input file-input-bordered w-full"
                />
              </div>
        
              {/* Book Name */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title of the Book</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={updateBook.name}
                  placeholder="Enter book title"
                  className="input input-bordered w-full"
                />
              </div>
        
             
        
              {/* Author Name */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Author Name</span>
                </label>
                <input
                  type="text"
                  name="authorName"
                  defaultValue={updateBook.author}
                  placeholder="Enter author name"
                  className="input input-bordered w-full"
                />
              </div>
        
              {/* Category */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  name="category"
                  className="select select-bordered w-full"
                 defaultValue={updateBook.book_category}
                >
                  
                  <option value="Novel">Novel</option>
                  <option value="Thriller">Thriller</option>
                  <option value="History">History</option>
                  <option value="Drama">Drama</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                </select>
              </div>
        
            
        
              {/* Rating */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  placeholder="Rate (1-5)"
                  defaultValue={updateBook.rating}
                  className="input input-bordered w-full"
                  min="1"
                  max="5"
                />
              </div>
        
              
        
              {/* Submit Button */}
              <button
                type="submit"
                className="py-3 btn-block bg-red-500 hover:bg-black text-white"
              >
                Update Books
              </button>
            </form>
              {/* form */}
              </Fade>
      </div>
    </>
  )
}

export default Update