"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation"; // Navigasyon için stil dosyası
import { Navigation } from "swiper/modules";

// Swiper ve SwiperSlide bileşenlerini dinamik olarak yükle
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  {
    ssr: false,
  }
);

// Örnek yorumlar
const reviews = [
  {
    id: 1,
    name: "Donald Duck",
    title: "Alukas is my favourite store",
    text: "Great products and designs and such great quality, they always wash up well no matter how many times I wash them.",
    rating: 5,
  },
  // {
  //   id: 2,
  //   name: "Niamh Oxley",
  //   title: "Beautiful products",
  //   text: "Beautiful clothes. I always get complements. Good quality and items wash well. products and designs and such great.",
  //   rating: 4,
  // },
  // {
  //   id: 3,
  //   name: "Mary Green",
  //   title: "Lovely products",
  //   text: "Great products and designs and such great quality, they always wash up well no matter how many times I wash them.",
  //   rating: 5,
  // },
];

export default function Customer() {
  return (
    <div className="flex justify-center py-16 bg-[#EDE2E1]">
      <div className="w-full max-w-7xl">
        {/* Ana konteynerin genişliği */}
        <h2 className="text-center text-4xl font-medium mb-8">
          Customer Review
        </h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 1, // Küçük ekranlarda 1 kart
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2, // Orta ekranlarda 2 kart
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3, // Büyük ekranlarda 3 kart
              spaceBetween: 30,
            },
          }}
          className="review-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              className="flex justify-center" // Ortalamak için flex ve justify-center kullanımı
            >
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs">
                {/* max-w-xs genişlik belirler */}
                <div className="flex items-center mb-4">
                  <div className="bg-black text-white h-10 w-10 flex items-center justify-center rounded-full">
                    <FaQuoteLeft className="text-lg" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{review.title}</h3>
                <p className="text-gray-700 mb-4">{review.text}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    - {review.name} -
                  </span>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.351 4.154a1 1 0 00.95.69h4.392c.97 0 1.371 1.24.588 1.81l-3.547 2.58a1 1 0 00-.364 1.118l1.352 4.154c.3.921-.755 1.688-1.538 1.118l-3.548-2.58a1 1 0 00-1.176 0l-3.548 2.58c-.783.57-1.838-.197-1.538-1.118l1.352-4.154a1 1 0 00-.364-1.118L2.066 9.582c-.783-.57-.383-1.81.588-1.81h4.392a1 1 0 00.95-.69l1.351-4.154z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
