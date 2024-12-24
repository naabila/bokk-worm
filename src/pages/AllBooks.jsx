import React, { useEffect, useState } from 'react'
import DynamicTitle from '../components/DynamicTitle'
import { Fade } from 'react-awesome-reveal'
import GridView from '../components/GridView'
import TableView from '../components/TableView'
import SectionBanner from '../components/SectionBanner'
import useAxiosSecure from '../hook/useAxiosSecure'

function AllBooks() {
  const axios=useAxiosSecure();
  const[view,setView]=useState('Grid');
  const[books,setBooks]=useState([]);

  //fecthing book data
  useEffect(()=>{
fetchBookData()

  },[axios])
const fetchBookData=async ()=>{
try{
  const {data}=axios.get('/add-books')
  .then(res=>setBooks(res.data))
}catch(err){
  console.log("Error loading Books data",err)
}
}
  return (
    <>
      <DynamicTitle title='All books' />
      <SectionBanner title='See All Books' />
      <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <p className='text-red-500 font-bold text-2xl'>{view} View</p>
        <select value={view} onChange={(e)=>setView(e.target.value)}>
          
          <option value="Grid">Grid View</option>
          <option value="Table">Table View</option>
        </select>
      </div>
        <Fade>
          {
            view==="Grid"?
            <GridView books={books} />
            :
            <TableView books={books} />
          }
        </Fade>
      </div>

    </>
  )
}

export default AllBooks