import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import SectionBanner from '../components/SectionBanner'
import { GiCogLock } from 'react-icons/gi'
import useAxiosSecure from '../hook/useAxiosSecure';
import DynamicTitle from "../components/DynamicTitle"
import { toast } from 'react-toastify';
function AddBooks() {
  const axios=useAxiosSecure()
  //Add book fn
  const handleAddBooks=async (e)=>{
  e.preventDefault();
  const form=e.target;
  const name=form.name.value;
  const image=form.image.value;
  const quantity=form.quantity.value;
  const author=form.authorName.value;
  const book_category=form.querySelector("select").value;
  const description=form.description.value;
  const rating=form.rating.value;
  const content=form.content.value;
  const bookData={name,
    image,
    quantity,
    author,
    book_category,
    description,
    rating,
    content}
console.log(bookData)
//post data
try {
  const response = await axios.post('/add-books', bookData);
  if (response.data.insertedId) {
    toast.success("Book added successfully!");
    form.reset(); 
  } else {
    toast.error("Failed to add book.");
  }
} catch (error) {
  console.error(error);
  toast.error("An error occurred while adding the book.");
}


}
  return (
   <>
   <DynamicTitle title='Add Books' />
   <SectionBanner title='Add Books' />
    <div className="container mx-auto">
      <Fade>
        {/* form */}
      <form
      onSubmit={handleAddBooks}
      className=" mx-auto p-6 shadow-lg rounded-lg border max-w-[800px]"
      
    >
      <h2 className="text-2xl font-bold text-center mb-6">Add a New Book</h2>

      {/* Image Upload */}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Upload Book Cover Image</span>
        </label>
        <input
          type="text"
          name="image"
          
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
          placeholder="Enter book title"
          className="input input-bordered w-full"
        />
      </div>

      {/* Quantity */}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Quantity</span>
        </label>
        <input
          type="number"
          name="quantity"
          min="1"
          placeholder="Enter quantity"
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
         
        >
          
          <option value="Novel">Novel</option>
          <option value="Thriller">Thriller</option>
          <option value="History">History</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </div>

      {/* Short Description */}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Short Description</span>
        </label>
        <textarea
          name="description"
          placeholder="Enter a brief description of the book"
          className="textarea textarea-bordered w-full"
          rows="4"
        ></textarea>
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
          className="input input-bordered w-full"
          min="1"
          max="5"
        />
      </div>

      {/* Book Content */}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Book Content</span>
        </label>
        <textarea
          name="content"
          placeholder="Provide additional details about the book"
          className="textarea textarea-bordered w-full"
          rows="4"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="py-3 btn-block bg-red-500 hover:bg-black text-white"
      >
        Add Books
      </button>
    </form>
      {/* form */}
      </Fade>
    </div>
   </>
  )
}

export default AddBooks