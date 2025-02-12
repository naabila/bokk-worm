import React from 'react'
import SectionBanner from '../components/SectionBanner'
import { Fade } from 'react-awesome-reveal'
import Abbout from "../../src/assets/about.jpg"
function About() {
  return (
    <>
      <SectionBanner title='About Us' />
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
                src={Abbout}
                alt="Library kid"
                className="rounded-xl"
              />
             
            </div>
            </Fade>
          </div>
    </>
  )
}

export default About