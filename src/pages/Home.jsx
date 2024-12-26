import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";
import banner3 from "../assets/banner-3.jpg";
import Category1 from "../assets/c1.jpg"
import Category2 from "../assets/c2.jpg"
import Category3 from "../assets/c3.jpg"
import Category4 from "../assets/c4.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation,Pagination } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import useAxiosSecure from '../hook/useAxiosSecure';
import SectionHeadings from '../components/SectionHeadings';



const sliderContent=[
  {
    title:'Empowering Minds, One Book at a Time',
    subTitle:"Effortlessly manage your library with modern tools and seamless organization",
   image:banner1
  },
  {
    title:'Redefine the Library Experience',
    subTitle:"Transform how books are managed, borrowed, and discovered digitally.",
   image:banner2
  },{
    title:'Where Books Meet Technology',
    subTitle:"Simplify library operations and enhance the reading experience for everyone.",
   image:banner3
  }
]
function Home() {
  const[books,setBooks]=useState([])
  const axios=useAxiosSecure()
  //fecthing book data
  useEffect(()=>{
    fetchBookData()
    
      },[axios])
    const fetchBookData=async ()=>{
    try{
      const {data}=await axios.get('/add-books')
      setBooks(data)
    }catch(err){
      console.log("Error loading Books data",err)
    }
    }
    console.log(books)
console.log(books.book_category)



  const navigate=useNavigate();
  return (
    <>
    <Swiper  spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}className="mySwiper h-[80vh] w-full text-white">
     
      {
        sliderContent.map((slide ,indx)=>{
          return(
            <SwiperSlide key={indx} style={{
    backgroundImage: `url(${slide.image})`,
    backgroundSize:'cover',
    backgroundPosition: "center center",
    backgroundRepeat:"no-repeat",
  }} >
          
           <div className='flex flex-col justify-center items-center h-full'>
              <Fade direction='up'>
              <h1 className='font-bold text-5xl'>{slide.title}</h1>
              <p className='my-5'>{slide.subTitle}</p>
              <button onClick={()=>navigate('/allbooks')} className='bg-red-500 text-white px-8 py-3 hover:bg-black transition'>See More</button>
              </Fade>
            </div>
          
          </SwiperSlide>
          )
        })
      }
    </Swiper>

    <div className="container mx-auto">
      <SectionHeadings title='Featured Category' />

      {/* category card */}
      <div className="grid p-5 grid-cols-2 md:grid-cold-2 lg:grid-cols-4 gap-5">
        {/* card 1 */}
        <Link to='/bookcategory/Novel'>
        <div className="card bg-base-100 image-full  shadow-xl">
  <figure>
    <img
      src={Category1}
      alt="Shoes" />
  </figure>
  <div className="card-body justify-center items-center gap-3">
    <h2 className="card-title">Novel</h2>
    
    <div className="card-actions justify-center">
      <button className="px-5 py-3 rounded-none bg-red-500 border-none text-white">See more </button>
    </div>
  </div>
</div>
</Link>
       
{/* card-2 */}
<Link to='/bookcategory/Thriller'>
        <div className="card bg-base-100 image-full  shadow-xl max-h-[230px]">
  <figure>
    <img
      src={Category2}
      alt="Shoes" />
  </figure>
  <div className="card-body justify-center items-center gap-3">
    <h2 className="card-title">Thriller</h2>
    
    <div className="card-actions justify-center">
      <button className="px-5 py-3 rounded-none bg-red-500 border-none text-white">See more </button>
    </div>
  </div>
</div>
</Link>
{/* card 3 */}
<Link to='/bookcategory/History'>
        <div className="card bg-base-100 image-full max-h-[230px] shadow-xl">
  <figure>
    <img
      src={Category3}
      alt="Shoes" />
  </figure>
  <div className="card-body justify-center items-center gap-3">
    <h2 className="card-title">History</h2>
    
    <div className="card-actions justify-center">
      <button className="px-5 py-3 rounded-none bg-red-500 border-none text-white">See more </button>
    </div>
  </div>
</div>
</Link>
{/* card-4 */}
<Link to='/bookcategory/Drama'>
        <div className="card bg-base-100 image-full max-h-[230px] shadow-xl">
  <figure>
    <img
      src={Category4}
      alt="Shoes" />
  </figure>
  <div className="card-body justify-center items-center gap-3">
    <h2 className="card-title">Drama</h2>
    
    <div className="card-actions justify-center">
      <button className="px-5 py-3 rounded-none bg-red-500 border-none text-white">See more </button>
    </div>
  </div>
</div>
</Link>
</div>

    </div>
  </>
  )
}

export default Home