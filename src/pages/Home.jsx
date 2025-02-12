import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";
import banner3 from "../assets/banner-3.jpg";
import Category1 from "../assets/c1.jpg"
import Category2 from "../assets/c2.jpg"
import Category3 from "../assets/c3.jpg"
import Category4 from "../assets/c4.jpg"
import About from "../assets/about.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation,Pagination } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import useAxiosSecure from '../hook/useAxiosSecure';
import SectionHeadings from '../components/SectionHeadings';
import FAQ from '../components/Faq';


//testimonial

const testimonials = [
  {
    name: 'Ariana Grande',
    role: 'Student',
    message:
      'This platform has completely transformed the way I access and manage books. The user-friendly interface makes it super easy to find what I need, and I love the variety of resources available.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'John Doe',
    role: 'Professor',
    message:
      'As an educator, I appreciate how this system streamlines the borrowing process and keeps everything organized. It’s been a valuable tool for both myself and my students.',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Librarian',
    message:
      'Managing our library has never been easier. The features are intuitive, and the support team is incredibly responsive. Highly recommended for libraries of any size.',
    image: 'https://randomuser.me/api/portraits/women/46.jpg',
  },
];


//slider
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
              <Fade direction='up' triggerOnce={true}>
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
{/* extra 1 */}
<div className="container relative mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 items-center">
      {/* Text and Features */}
      <Fade direction='left' triggerOnce={true}>
      <div>
        {/* Heading and Subtext */}
        <h2 className='text-3xl font-bold mb-5'>About Us</h2>
        <div className="mb-8">
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          </div>
          <p className="mt-4 text-gray-600">
            Discover the best way to manage your library efficiently. Explore features designed to keep books and members in sync.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-start">
            <div className="text-blue-500 text-3xl mb-2">
              📇
            </div>
            <h3 className="font-bold text-xl">Member Card</h3>
            <p className="text-gray-600">
              Register members and manage their information with ease.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start">
            <div className="text-blue-500 text-3xl mb-2">
              🏆
            </div>
            <h3 className="font-bold text-xl">High-Quality Books</h3>
            <p className="text-gray-600">
              Access a wide variety of curated and high-quality books.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start">
            <div className="text-blue-500 text-3xl mb-2">
              📚
            </div>
            <h3 className="font-bold text-xl">Free Books</h3>
            <p className="text-gray-600">
              Borrow books for free and enjoy a seamless reading experience.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-start">
            <div className="text-blue-500 text-3xl mb-2">
              📄
            </div>
            <h3 className="font-bold text-xl">Up-to-Date Books</h3>
            <p className="text-gray-600">
              Always find the latest editions of your favorite books.
            </p>
          </div>
        </div>
      </div>
      </Fade>

      {/* Image */}
      <Fade direction='right' triggerOnce={true}>
      <div className="relative">
        <img
          src={About}
          alt="Library kid"
          className="rounded-xl"
        />
       
      </div>
      </Fade>
    </div>
    {/* extra2 */}
    <div className='mt-10'>
      <SectionHeadings title='What People Say About Us' />
    </div>
    <div
      className="bg-cover relative bg-center text-white py-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
          backgroundSize:"cover",
          objectFit: 'cover',
          backgroundPosition: "center center" 
      }}
    >
    <div className='h-full w-full bg-black/50 top-0 bottom-0 left-0 ri' style={{
      position:"absolute"

    }}></div>
      <div className="container mx-auto text-center">
       

        <Swiper
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="my-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-2xl mx-auto text-center py-10">
                <p className="italic text-lg mb-6">{testimonial.message}</p>
                <div className="flex justify-center items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-blue-500"
                  />
                  <div>
                    <h5 className="text-xl font-semibold">{testimonial.name}</h5>
                    <p className="text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    
    {/* Faq */}
    <FAQ />
    </div>
  </>
  )
}

export default Home;