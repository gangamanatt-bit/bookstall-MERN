import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* ABOUT US */}
        <div>
          <h2 className="font-bold text-lg mb-4 tracking-wide">ABOUT US</h2>
          <p className="text-gray-300 leading-7 text-sm">
            We believe books are more than just pages — they are windows into new worlds,
            teachers of wisdom, and companions for life. Our journey began with a passion
            for storytelling and a mission to make reading accessible, enjoyable, and inspiring.
          </p>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h2 className="font-bold text-lg mb-4 tracking-wide">NEWS LETTER</h2>
          <p className="text-gray-300 mb-4 text-sm">
            Stay updated with our latest trends
          </p>

          <div className="flex bg-white">
            <input
              type="email"
              placeholder="E Mail"
              className="w-full px-4 py-2 text-black outline-none"
            />
            <button className="bg-yellow-500 px-4 flex items-center justify-center">
              ➜
            </button>
          </div>
        </div>

        {/* FOLLOW US */}
        <div>
          <h2 className="font-bold text-lg mb-4 tracking-wide">FOLLOW US</h2>
          <p className="text-gray-300 mb-4 text-sm">Let us be social</p>

          <div className="flex gap-5 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-yellow-500" />
            <FaInstagram className="cursor-pointer hover:text-yellow-500" />
            <FaTwitter className="cursor-pointer hover:text-yellow-500" />
            <FaEnvelope className="cursor-pointer hover:text-yellow-500" />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-6">
        Copyright © 2025 All rights reserved | This website is made with ❤ By Luminar Technolab
      </div>
    </footer>
  );
}

export default Footer;
