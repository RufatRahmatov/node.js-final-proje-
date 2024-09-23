"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaHeart, FaSync, FaSearch } from "react-icons/fa";

interface Product {
  _id: string;
  name: string;
  price: number;
  discount?: number;
  image: string;
  hoverImage?: string;
  status?: string;
}

const TrendyCollection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")

      .then((response) => {
        console.log(response.data.data);
        setProducts(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-4xl font-semibold mb-12">
        Trendy Collection
      </h2>
      <Swiper spaceBetween={30} slidesPerView={4} navigation loop>
        {products.map((product, index) => (
          <SwiperSlide key={product._id}>
            <div className="group relative border rounded-lg p-4 bg-white shadow-md overflow-hidden">
              {/* Status Labels */}
              {product.status && (
                <div className="absolute top-0 left-0 bg-yellow-500 text-white text-xs px-2 py-1 rounded-br-lg">
                  {product.status.toUpperCase()}
                </div>
              )}

              {index === 2 ? (
                <div className="relative h-64">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/ScMzIvxBSi4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <>
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain group-hover:hidden"
                  />
                  {/* Hover Image */}
                  {product.hoverImage && (
                    <img
                      src={product.hoverImage}
                      alt={product.name}
                      className="w-full h-64 object-contain hidden group-hover:block"
                    />
                  )}
                </>
              )}

              {/* Hover Efekti ile Gelen İkonlar */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-x-0 group-hover:translate-y-0">
                <FaHeart className="text-gray-500 hover:text-black transform transition duration-300 hover:scale-125" />
                <FaSync className="text-gray-500 hover:text-black transform transition duration-300 hover:scale-125" />
                <FaSearch className="text-gray-500 hover:text-black transform transition duration-300 hover:scale-125" />
              </div>

              {/* Product Info */}
              <div className="mt-4 text-center">
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  {product.name}
                </h3>
                <p className="text-lg font-bold mb-1">
                  ${product.price}
                  {product.discount && (
                    <span className="text-sm text-red-500 line-through ml-2">
                      ${product.price + product.discount}
                    </span>
                  )}
                </p>
                <button className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded-md transition-all duration-300 hover:bg-white hover:text-black border-black border-2">
                  ADD TO CART
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendyCollection;
