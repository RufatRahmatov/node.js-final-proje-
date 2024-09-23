"use client";

import React from "react";

const categories = [
  {
    name: "NECKLACES",
    image:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t1.jpg?v=1710145653&width=1500",
  },
  {
    name: "RINGS",
    image:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t2.jpg?v=1710145652&width=1500",
  },
  {
    name: "BRACELETS",
    image:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t3.jpg?v=1710145652&width=1500",
  },
  {
    name: "EARNINGS",
    image:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t4.jpg?v=1710145652&width=1500",
  },
  {
    name: "CHARM & DANGLES",
    image:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t5.jpg?v=1710145652&width=1500",
  },
  {
    name: "GIFT IDEAS",
    image:
      "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t6.jpg?v=1710145652&width=1500",
  },
];

const Populyar: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 ">
      <h2 className="text-center text-4xl font-semibold mb-12">
        Popular Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 cursor-pointer">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center p-4   transition-all duration-300"
          >
            <div className="w-48 h-48 mb-4 relative overflow-hidden rounded-full flex items-center justify-center  ">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="relative text-sm font-medium text-gray-700 transition-all duration-300 ease-in-out">
              {category.name}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-700 transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Populyar;
