import React from 'react'

function Newsletter() {
  return (
    <>
          <div className="relative bg-cover bg-center mt-12  p-16 lg:p-20 text-white" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2023/01/15/16/20/library-7720589_960_720.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Stay updated with the latest books and library news.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs text-black"
            />
            <button className="px-5 ml-5 rounded-md py-3 bg-red-500 border-none text-white">See more </button>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Newsletter