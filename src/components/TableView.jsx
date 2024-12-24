import React from 'react'
import { Link } from 'react-router-dom'

function TableView({books}) {
  return (
    <>
       <div className="overflow-x-auto">
  <table className="table table-zebra mt-10">
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
            const{name,author,image,category,rating,_id}=book
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
        <td>{category}</td>
        <td>{rating}</td>
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