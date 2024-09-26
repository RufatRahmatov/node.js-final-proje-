"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Shopnow = () => {
  const router = useRouter();

  const navigateToShop = () => {
    router.push("/shop");
  };

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 py-12 px-4 w-[1570px] ml-[170px]">
      <div className="relative group w-full md:w-[48%] overflow-hidden  shadow-lg">
        <div className="overflow-hidden">
          <img
            src="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_4.jpg?v=1710149492&width=1340"
            alt="New Bangles Collection"
            className="w-[1000px] h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-end p-8 transition-opacity duration-300 opacity-100 group-hover:opacity-100">
          <div className="mb-4 py-9 px-4">
            <h3 className="text-black text-3xl font-medium mb-2">
              New Bangles <br />
              <span>Collection</span>
            </h3>
            <p className="text-black mb-4">Catch the highlight in the roof</p>
          </div>
          <button
            onClick={navigateToShop}
            className="text-black relative inline-block text-lg font-medium mt-auto self-start"
          >
            SHOP NOW
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black transition-all duration-500"></span>
          </button>
        </div>
      </div>

      <div className="relative group w-full md:w-[48%] overflow-hidden  shadow-lg">
        <div className="overflow-hidden">
          <img
            src="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_5.jpg?v=1710149492&width=1340"
            alt="Culture of Ring Design"
            className="w-[1000px] h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-end p-8 transition-opacity duration-300 opacity-100 group-hover:opacity-100">
          <div className="mb-4 py-9 px-4">
            <h3 className="text-black text-3xl font-medium mb-2">
              Culture of <br />
              <span>Ring Design</span>
            </h3>
            <p className="text-black mb-4">Pasha de Cartier Collection.</p>
          </div>
          <button
            onClick={navigateToShop}
            className="  text-black relative inline-block text-lg font-medium mt-auto self-start "
          >
            SHOP NOW
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black transition-all duration-500"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shopnow;
