"use client";

import { FC, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";

interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
}

const Header: FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search?query=${query}`);
      setResults(response.data.products);
      setSuggestions(["bracelet", "birds", "bundle", "a", "c", "d", "test"]);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <header className="border-b border-gray-300 py-4">
      <div className="container mx-auto flex justify-center gap-[255px] items-center">
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search Products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded-sm py-2 px-4 text-sm focus:outline-none focus:border-black w-[250px] h-[45px] pr-10"
          />
          <AiOutlineSearch
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mr-[105px]">ALUKAS & CO</h1>
        </div>
        <div className="flex items-center space-x-4">
          <IoPersonOutline className="text-2xl" />
          <IoMdHeartEmpty className="text-2xl text-bold" />
          <PiShoppingCart className="text-2xl" />
        </div>
      </div>

      <nav className="mt-10 border border-b-0">
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
              href="/home"
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
              href="/contact"
              className="text-sm uppercase font-semibold group-hover:text-gray-700"
            >
              Contact
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 ease-out group-hover:w-full"></div>
            </a>
            <MdOutlineKeyboardArrowDown className="text-xl text-gray-500" />
          </li>
          <li className="group relative flex items-center">
            <a
              href="/detail"
              className="text-sm uppercase font-semibold group-hover:text-gray-700"
            >
              Detail
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

      {results.length > 0 && (
        <div className="container mx-auto py-4">
          <h2 className="text-lg font-semibold">
            Search for &quot;{query}&quot;
          </h2>

          <div className="flex flex-wrap gap-4">
            {suggestions.length > 0 && (
              <div className="mb-4">
                <h3 className="text-md font-semibold">Suggestions:</h3>
                <div className="flex gap-2">
                  {suggestions.map((suggestion, index) => (
                    <span
                      key={index}
                      className="text-blue-500 cursor-pointer"
                      onClick={() => setQuery(suggestion)}
                    >
                      {suggestion}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((product) => (
                <div
                  key={product._id}
                  className="border p-4 rounded-lg shadow-lg"
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p>{product.brand}</p>
                  <p className="text-gray-500">${product.price.toFixed(2)}</p>
                  {product.discountPrice && (
                    <p className="text-red-500 line-through">
                      ${product.discountPrice.toFixed(2)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded">
            More Results
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
