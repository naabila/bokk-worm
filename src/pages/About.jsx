import React from 'react'
import SectionBanner from '../components/SectionBanner'
import { Fade } from 'react-awesome-reveal';

import { FaUsers, FaBook, FaBrain, FaHandshake, FaShieldAlt } from "react-icons/fa";
import Abbout from "../../src/assets/about.jpg"
import SectionHeadings from '../components/SectionHeadings';
function About() {
  const values = [
    { icon: <FaUsers size={40} className="text-red-500" />, title: "Accessibility for All", description: "We believe knowledge should be available to everyone. Our platform ensures easy access to books, resources, and learning materials for users of all backgrounds." },
    { icon: <FaBook size={40} className="text-red-500" />, title: "User-Centric Experience", description: "Our priority is to create a seamless and enjoyable experience. From intuitive navigation to personalized recommendations, we focus on user satisfaction." },
    { icon: <FaBrain size={40} className="text-red-500" />, title: "Innovation in Learning", description: "We embrace technology to enhance reading and research. Our digital tools, AI-driven suggestions, and modern UI make the library more engaging." },
    { icon: <FaHandshake size={40} className="text-red-500" />, title: "Community and Collaboration", description: "Libraries are more than books—they're communities. We encourage discussions, book clubs, and knowledge sharing among readers." },
    { icon: <FaShieldAlt size={40} className="text-red-500" />, title: "Integrity and Reliability", description: "We uphold the highest standards of security and trust, ensuring accurate information, safe data storage, and a transparent system." }
  ];
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

      <div className="container mx-auto px-4 py-12 text-center">
      <SectionHeadings title='Our Values' />
     <Fade triggerOnce={true}>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {values.map((value, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="bg-gray-200 p-4 rounded-full mb-4">{value.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
            <p className="text-gray-600 text-sm text-center">{value.description}</p>
          </div>
        ))}
      </div>
     </Fade>
    </div>
    </>
  )
}

export default About