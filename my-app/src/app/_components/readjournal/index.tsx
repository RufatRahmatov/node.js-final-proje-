import React from "react";

const Readjournal = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 ">
      <h2 className="text-center text-4xl font-medium mb-4">Read Journal</h2>
      <p className="text-center text-lg mb-12">
        Latest trends and inspirations in fashion design.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[1450px]  ml-[-100px] ">
        <div className="group relative overflow-hidden cursor:pointer ">
          <div className="overflow-hidden">
            <img
              src="https://demo-alukas.myshopify.com/cdn/shop/articles/3.jpg?v=1711695248&width=533"
              alt="Selective Styles Help your look"
              className="w-full  object-cover transition-transform duration-500 transform group-hover:scale-110 cursor-pointer"
            />
          </div>
          <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1">
            ACCESSORIES
          </div>
          <div className="mt-8">
            <p className="text-xs text-gray-600">
              POST BY ALUKAS SHOPIFY - MAR 06 2024
            </p>
            <h3 className="text-xl font-medium mt-2 mb-2">
              Selective Styles Help your look
            </h3>
            <p className="text-sm text-black cursor-pointer relative group">
              Continue Reading
              <span className="block h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full absolute bottom-0 left-0"></span>
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="group relative overflow-hidden ">
          <div className="overflow-hidden">
            <img
              src="https://demo-alukas.myshopify.com/cdn/shop/articles/2.jpg?v=1711695314&width=533"
              alt="How to Style a Quiff"
              className="w-full  object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
          </div>
          <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1">
            ACCESSORIES
          </div>
          <div className="mt-8">
            <p className="text-xs text-gray-600">
              POST BY ALUKAS SHOPIFY - MAR 06 2024
            </p>
            <h3 className="text-xl font-medium mt-2 mb-2">
              How to Style a Quiff
            </h3>
            <p className="text-sm text-black cursor-pointer relative group">
              Continue Reading
              <span className="block h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full absolute bottom-0 left-0"></span>
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div className="group relative overflow-hidden ">
          <div className="overflow-hidden">
            <img
              src="https://demo-alukas.myshopify.com/cdn/shop/articles/1.jpg?v=1711695328&width=533"
              alt="Christmas Gift Guide"
              className="w-full object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
          </div>
          <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1">
            ACCESSORIES
          </div>
          <div className="mt-8">
            <p className="text-xs text-gray-600">
              POST BY ALUKAS SHOPIFY - MAR 06 2024
            </p>
            <h3 className="text-xl font-medium mt-2 mb-2">
              Christmas Gift Guide
            </h3>
            <p className="text-sm text-black cursor-pointer relative group">
              Continue Reading
              <span className="block h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full absolute bottom-0 left-0"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readjournal;
