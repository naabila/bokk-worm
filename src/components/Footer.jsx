import React from 'react';
import { GiBookshelf } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Logo and Address */}
        <div>
           <Link to='/'>
                <div className="flex justify-content items-center gap-2">
                <GiBookshelf className='text-red-500 md:text-4xl text-2xl' />
                <p className='md:text-3xl text-2xl font-bold '>Book <span className='text-red-500'>Worm</span> </p>
                </div>
              </Link>
          <p className="mt-4 text-gray-600">
            1418 River Drive, Suite 35 Cottonhall, CA 96222
            <br />
            United States
          </p>
          <p className="mt-2 text-gray-600">
            sale@bookworm.com
            <br />
            +1 246-345-0695
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-red-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-red-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-red-500">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-red-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-red-500">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-bold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Sitemap
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Bookmarks
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Sign in/Join
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Product Recalls
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Store Pickup
              </a>
            </li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h3 className="font-bold mb-4">Policy</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Security
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Privacy
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Action
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Comedy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Drama
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Horror
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Kids
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Romantic Comedy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
