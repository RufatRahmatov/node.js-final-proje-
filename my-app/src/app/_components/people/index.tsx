"use client";

import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineSync, AiOutlineSearch } from "react-icons/ai";

const products = [
  {
    id: 1,
    name: "Blue Rockstar Plain Hat",
    brand: "BAUBLEBAR",
    price: 222.0,
    originalPrice: 444.0,
    imgSrc:
      "https://cdn.shopify.com/s/files/1/0691/9307/2864/files/1_8032123f-140d-4a17-831c-07774c260a27.jpg?v=1715240429&width=533",
    hoverImgSrc:
      "https://cdn.shopify.com/s/files/1/0691/9307/2864/files/3_d32d13d0-c673-4fd1-8d9b-9f4a916ee1cf.jpg?v=1715240443&width=533",
    discount: "-50%",
  },
  {
    id: 2,
    name: "The Hat And Skin Bundle",
    brand: "ALUKAS",
    price: 820.0,
    originalPrice: 199,
    imgSrc:
      "https://cdn.shopify.com/s/files/1/0691/9307/2864/files/1_7c6d524e-bab6-41c5-829a-bb598daf494c.jpg?v=1713240700&width=533",
    hoverImgSrc:
      "https://cdn.shopify.com/s/files/1/0691/9307/2864/files/4_39475644-cebd-4375-808f-fe4a936a60d5.jpg?v=1715240316&width=533",
    discount: null,
  },
  {
    id: 3,
    name: "Minimalist Leather Bag",
    brand: "ADRIANNA PAPELL",
    price: 210.0,
    originalPrice: 250.0,
    imgSrc:
      "https://cdn.shopify.com/s/files/1/0691/9307/2864/files/fashion_products_18_1.jpg?v=1712735502&width=533",
    hoverImgSrc:
      "https://cdn.shopify.com/s/files/1/0691/9307/2864/files/fashion_products_18_2.jpg?v=1712735502&width=533",
    discount: "-16%",
  },
  {
    id: 4,
    name: "Yellow Stone Stripe Sweatshirt",
    brand: "C.P. COMPANY",
    price: 100.0,
    originalPrice: 200.0,
    imgSrc:
      "https://cdn.shopify.com/s/files/1/0691/9307/2864/files/1_c5a20076-04be-46dd-b984-1700ec34a3dc.jpg?v=1712566246&width=533",
    hoverImgSrc:
      "https://cdn.shopify.com/s/files/1/0691/9307/2864/files/2_323c1811-dd43-447a-8721-9b63912e1227.jpg?v=1712566247&width=533",
    discount: "-50%",
  },
];

const People = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="container mx-auto p-6 mt-16">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        People Also Bought
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Here’s some of our most similar products people are buying. Click to
        discover trending style.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group p-4   "
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            {product.discount && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1   ">
                {product.discount}
              </div>
            )}

            <img
              src={
                hoveredProduct === product.id
                  ? product.hoverImgSrc
                  : product.imgSrc
              }
              alt={product.name}
              style={{ height: product.id === 3 ? "322px" : "auto" }}
              className="w-full h-auto mb-4"
            />

            {hoveredProduct === product.id && (
              <div className="absolute top-2 right-2 flex flex-col space-y-2">
                <AiOutlineHeart className="text-xl text-gray-700 cursor-pointer" />
                <AiOutlineSync className="text-xl text-gray-700 cursor-pointer" />
                <AiOutlineSearch className="text-xl text-gray-700 cursor-pointer" />
              </div>
            )}

            <div className="text-center">
              <p className="text-sm text-gray-600">{product.brand}</p>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </p>
              {product.originalPrice && (
                <p className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </p>
              )}

              <div className="mt-4">
                <button className="relative  text-black font-semibold transition-all duration-300 hover:bg-white hover:text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
