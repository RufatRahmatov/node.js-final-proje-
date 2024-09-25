import { FC } from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

import { PiShoppingCart } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
const Header: FC = () => {
  return (
    <header className="border-b border-gray-300 py-4">
      <div className="container mx-auto flex justify-center gap-[255px] items-center ">
        {/* Search Bar */}
        <div className="flex items-center  relative">
          <input
            type="text"
            placeholder="Search Products"
            className="border rounded-sm py-2 px-4 text-sm focus:outline-none focus:border-black w-[250px] h-[45px] pr-10"
          />

          <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400" />
        </div>

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-semibold mr-[105px]">ALUKAS & CO</h1>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <IoPersonOutline className="text-2xl" />
          <IoMdHeartEmpty className="text-2xl text-bold" />
          <PiShoppingCart className="text-2xl" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-10 border border-b-0 ">
        <ul className="flex justify-center items-center space-x-8 py-2 mt-2">
          <li className="group mr-24 flex">
            <a
              href="#"
              className="text-sm uppercase font-semibold group-hover:text-gray-700"
            >
              Browse Categories
            </a>
            <MdOutlineKeyboardArrowDown className="text-xl text-gray-500" />
          </li>
          <li className="group relative flex items-center">
            <a
              href="#"
              className="text-sm uppercase font-semibold group-hover:text-gray-700 relative"
            >
              Home
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-500 ease-out group-hover:w-full"></div>
            </a>
            <MdOutlineKeyboardArrowDown className="text-xl text-gray-500 ml-1" />

            <div className="absolute left-0 mt-[355px] ml-[-70px] opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 w-48 bg-white shadow-lg transition-all duration-500 ease-in-out z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Home v1 - Default
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Home v2 - Classic
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Home v3 - Mega Shop
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Home v4 - Handmade
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Home v5 - Minimal
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Home v6 - Showcase
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Home v7 - Simple
              </a>
            </div>
          </li>

          <li className="group relative flex items-center">
            <a
              href="/shop"
              className="text-sm uppercase font-semibold group-hover:text-gray-700"
            >
              Shop
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 ease-out group-hover:w-full"></div>
            </a>
            <MdOutlineKeyboardArrowDown className="text-xl text-gray-500" />
          </li>
          <li className="group relative flex items-center">
            <a
              href="#"
              className="text-sm uppercase font-semibold group-hover:text-gray-700"
            >
              Product
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 ease-out group-hover:w-full"></div>
            </a>
            <MdOutlineKeyboardArrowDown className="text-xl text-gray-500" />
          </li>
          <li className="group relative flex items-center">
            <a
              href="#"
              className="text-sm uppercase font-semibold group-hover:text-gray-700"
            >
              Pages
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 ease-out group-hover:w-full"></div>
            </a>
            <MdOutlineKeyboardArrowDown className="text-xl text-gray-500" />
          </li>
          <li className="group relative flex items-center">
            <a
              href="#"
              className="text-sm uppercase font-semibold group-hover:text-gray-700"
            >
              Blogs
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 ease-out group-hover:w-full"></div>
            </a>
            <MdOutlineKeyboardArrowDown className="text-xl text-gray-500" />
          </li>
          <li className="group relative flex items-center">
            <a
              href="/dashbord"
              className="text-sm uppercase font-semibold group-hover:text-gray-700"
            >
              Dashbord
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 ease-out group-hover:w-full"></div>
            </a>
            <MdOutlineKeyboardArrowDown className="text-xl text-gray-500" />
          </li>
          {/* Contact Info */}
          <div className="flex items-center space-x-4 gap-2 pl-6">
            <div className="flex items-center space-x-1">
              <FaPhone className="text-black" />
              <span>(+800) 1234 56</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaMapMarkerAlt className="text-black" />
              <span>Our Stores</span>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
