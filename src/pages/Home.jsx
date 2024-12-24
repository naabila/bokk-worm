import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";
import banner3 from "../assets/banner-3.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation,Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
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
  </>
  )
}

export default Home