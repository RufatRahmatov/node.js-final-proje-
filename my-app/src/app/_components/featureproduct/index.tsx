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

const Featureproduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products, "products");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 mt-12">
      <div>
        <h2 className="text-center text-4xl font-semibold mb-4">
          Featured Products
        </h2>
        <h4 className="text-center text-xl mb-6">
          Collect your loves with our newest arrivals.
        </h4>
      </div>

      <Swiper spaceBetween={30} slidesPerView={4} navigation loop>
        {products?.map((product) => (
          <SwiperSlide key={product._id}>
            <div className="group relative  p-4 bg-white  overflow-hidden mt-4">
              {product.status && (
                <div className="absolute top-0 left-0 bg-yellow-500 text-white text-xs px-2 py-1 rounded-br-lg">
                  {product.status.toUpperCase()}
                </div>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain group-hover:hidden"
              />

              {product.hoverImage && (
                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className="w-full h-64 object-contain hidden group-hover:block"
                />
              )}

              <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-x-0 group-hover:translate-y-0">
                <FaHeart className="text-gray-500 hover:text-black transform transition duration-300 hover:scale-125" />
                <FaSync className="text-gray-500 hover:text-black transform transition duration-300 hover:scale-125" />
                <FaSearch className="text-gray-500 hover:text-black transform transition duration-300 hover:scale-125" />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  {product.name}
                </h3>
                <p className="text-lg font-medium mb-1">
                  ${product.price}
                  {product.discount && (
                    <span className="text-sm text-red-500 line-through ml-2">
                      ${product.price + product.discount}
                    </span>
                  )}
                </p>
                <button className="relative  text-black font-semibold transition-all duration-300 hover:bg-white hover:text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full">
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

export default Featureproduct;
