import React from 'react'
import { Fade } from 'react-awesome-reveal'

function SectionHeadings({title}) {
  return (
    <div className='flex justify-center items-center py-10'>
    <Fade direction='up' triggerOnce={false}>
    <h2 className='text-3xl font-bold'>{title}</h2>
    </Fade>
    
    </div>
  )
}

export default SectionHeadings