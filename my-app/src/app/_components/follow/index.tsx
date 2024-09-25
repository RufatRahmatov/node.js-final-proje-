import { IoLogoInstagram } from "react-icons/io5";
import React from "react";
import Link from "next/link";

const images = [
  "https://demo-alukas.myshopify.com/cdn/shop/files/alk_i5.jpg?v=1712894690&width=533",
  "https://demo-alukas.myshopify.com/cdn/shop/files/alk_i2.jpg?v=1711684491&width=533",
  "https://demo-alukas.myshopify.com/cdn/shop/files/alk_i3.jpg?v=1711684606&width=533",
  "https://demo-alukas.myshopify.com/cdn/shop/files/alk_i4.jpg?v=1711684578&width=533",
  "https://demo-alukas.myshopify.com/cdn/shop/files/alk_i5.jpg?v=1712894690&width=533",
  "https://demo-alukas.myshopify.com/cdn/shop/files/alk_i6.jpg?v=1711684593&width=533",
];

const instagramUrl = "https://www.instagram.com/alukas65/";

const Follow = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 text-center cursor-pointer ">
      <h2 className="text-4xl font-semibold mb-4">Follow Us on Instagram</h2>
      <p className="text-gray-600 mb-8">@bersky</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 w-[1465px] ml-[-150px]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden ${
              index === 0 ? "first-image" : "other-images"
            }`}
          >
            <img
              src={src}
              className={`transform group-hover:scale-110 transition-transform duration-300 ease-in-out w-full h-auto ${
                index === 0 ? "first-image-style" : "max-h "
              }`}
              style={{
                width: index === 0 ? "100%" : "100%",
                height: index === 0 ? "auto" : "auto",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <Link
                href={instagramUrl}
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="">
                  <IoLogoInstagram className="text-white w-10 h-10" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Follow;
