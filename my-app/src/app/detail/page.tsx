"use client";

import React, { useState } from "react";
import Layouts from "../_layouts/layout";
import Together from "../_components/together";
import Outstanding from "../_components/outstanding";
import People from "../_components/people";
import Newletter from "../_components/newletter";

const Detail = () => {
  const [, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { width, height } = (
      target as HTMLImageElement
    ).getBoundingClientRect();
    const x = (offsetX / width) * 100;
    const y = (offsetY / height) * 100;
    setZoomPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setZoomPosition({ x: 0, y: 0 });
  };

  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  return (
    <Layouts>
      <main>
        <div className="container mx-auto flex flex-col md:flex-row gap-8 p-6 mt-20 mr-[360px]">
          <div className="md:w-1/4 h-full p-4 flex flex-col items-start space-y-4 ml-[100px]  relative left-[310px] ">
            <img
              src="https://demo-alukas.myshopify.com/cdn/shop/files/1_59d81a48-9cc8-4a4d-9956-5934043eaa08.jpg?v=1709716432&width=1946"
              alt="Product Thumbnail 1"
              className="w-16 h-16 border  cursor-pointer"
            />
            <img
              src="https://demo-alukas.myshopify.com/cdn/shop/files/2_f817db73-eec1-4460-a7fe-98f4574b8376.jpg?v=1709716433&width=1946"
              alt="Product Thumbnail 2"
              className="w-16 h-16 border  cursor-pointer"
            />
            <img
              src="https://demo-alukas.myshopify.com/cdn/shop/files/1_59d81a48-9cc8-4a4d-9956-5934043eaa08.jpg?v=1709716432&width=1946"
              alt="Product Thumbnail 3"
              className="w-16 h-16 border  cursor-pointer"
            />
          </div>

          <div className="md:w-1/3 h-full  flex items-start sticky ">
            <div className="p-4  relative overflow-hidden">
              <img
                src="https://demo-alukas.myshopify.com/cdn/shop/files/1_59d81a48-9cc8-4a4d-9956-5934043eaa08.jpg?v=1709716432&width=1946"
                alt="Main Product Image"
                className="w-[540px] h-auto  transform transition-transform duration-200 ease-out"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </div>

          <div className=" md:w-1/3 p-4">
            <div className="border-b border-gray-300 pb-4 mb-4 mt-4">
              <h1 className="text-3xl font-semibold mb-2">
                True Stripes & Gold Charm
              </h1>
              <div className="flex items-center mb-2">
                <span className="text-red-500 font-semibold text-lg mr-2">
                  -19%
                </span>
                <span className="text-gray-600 text-sm">2 reviews</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-sm text-gray-500">
                  8 sold in last 16 hours
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                $129.00{" "}
                <span className="line-through text-gray-500 text-xl">
                  $159.00
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                This regulator has a rolled diaphragm and high flow rate with
                reduced pressure drop. It has an excellent degree of
                condensation.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                22 people are viewing this right now
              </p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h3 className="text-lg font-semibold mb-2">
                Add your personalization
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Add your name, note or upload your customized idea image to
                personalize your item. Custom items cannot be returned or
                exchanged.
              </p>
              <textarea
                placeholder="Customize note"
                className="w-full border  p-2 mb-2"
                rows={3}
              ></textarea>

              <div className="flex items-center mb-4">
                <span className="flex-grow border p-2 text-sm text-gray-600">
                  {fileName}
                </span>
                <label
                  htmlFor="file-upload"
                  className="bg-gray-100 border border-gray-300 text-blue-500 p-2 cursor-pointer flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm7 5a1 1 0 011-1h3a1 1 0 010 2h-3a1 1 0 01-1-1zm-3 4a1 1 0 01.117 1.993L8 13H5a1 1 0 01-.117-1.993L5 11h3zm0-4a1 1 0 01.117 1.993L8 9H5a1 1 0 01-.117-1.993L5 7h3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Upload image
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>

              <div className="flex items-center mb-4">
                <span className="text-red-500 font-semibold mr-2">
                  Hurry Up! Only 10 left in stock!
                </span>
              </div>

              <div className="flex flex-col space-y-4 mb-4">
                <div className="flex items-center space-x-4">
                  <button className="bg-black text-white py-3 px-6 w-full text-sm">
                    ADD TO CART
                  </button>
                  <button className="border border-gray-300 text-black py-3 px-6 w-full text-sm">
                    ♥
                  </button>
                </div>
                <div className="flex items-center space-x-4 justify-center">
                  <button className="border border-gray-300 text-black py-3 px-6 w-full text-sm">
                    ⟳
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <input type="checkbox" id="terms" className="cursor-pointer" />
                <label htmlFor="terms" className="text-gray-600 text-sm">
                  I agree with{" "}
                  <a href="#" className="text-blue-500 underline">
                    Terms & Conditions
                  </a>
                </label>
              </div>

              <div className="mb-4">
                <button className="bg-gray-300 text-gray-700 py-3 px-6 w-full text-sm">
                  BUY IT NOW
                </button>
              </div>

              <div className="text-gray-600 text-sm">
                <p className="mb-1">
                  ✓ Pickup available at{" "}
                  <span className="text-black font-semibold">
                    Shop location
                  </span>
                  . Usually ready in 24 hours
                </p>
                <p className="mb-1">
                  ✈ Estimate delivery times: 12-26 days (International), 3-6
                  days (United States).
                </p>
                <p>
                  ↩ Return within 45 days of purchase. Duties & taxes are
                  non-refundable.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Together />
        <Outstanding />
        <People />
        <Newletter />
      </main>
    </Layouts>
  );
};

export default Detail;
