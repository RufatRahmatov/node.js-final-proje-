"use client";

import React from "react";

const Cards = () => {
  const cardData = [
    {
      title: "2024 FASHION",
      subtitle: "Just Launched Desk The Hals",
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_1.webp?v=1712128482&width=436",
    },
    {
      title: "FLAT DISCOUNT",
      subtitle: "Necklaces & Body Jewels",
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_2.jpg?v=1711684410&width=436",
    },
    {
      title: "NEW COLLECTION",
      subtitle: "Jewelry & Charm Rings",
      image:
        "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_3.jpg?v=1711684399&width=436",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-white  shadow-lg"
          >
            {/* Resim ve Metin İçerik */}
            <div className="relative h-[320px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              {/* Metin İçerik */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-white p-4">
                <h3 className="text-sm text-gray-300 font-semibold">
                  {card.title.split(" ").map((word, index) => (
                    <span key={index} className="block">
                      {word}
                    </span>
                  ))}
                </h3>
                <h2 className="text-2xl font-bold my-2">{card.subtitle}</h2>
                <div className="flex items-start justify-start">
                  <span className="text-base text-white font-semibold transition-all duration-300 ease-in-out relative">
                    Shop Now
                    {/* Çizgi Animasyonu */}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
