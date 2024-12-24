import React from 'react'
import sectionBannerImage from "../assets/section-bg.jpg"
import { Fade } from 'react-awesome-reveal'
function SectionBanner({title}) {
  return (
   <>
    <div className='h-[40vh] mb-10 flex justify-center items-center'
  style={{
    backgroundImage: `url(${sectionBannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  }}
>
  <Fade direction='up'>
    <p className='font-bold text-white text-4xl'>{title}</p>
  </Fade>
</div>
   </>
  )
}

export default SectionBanner