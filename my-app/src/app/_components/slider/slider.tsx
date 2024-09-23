"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Slider = () => {
  return (
    <div className="relative w-full  h-[620px] bg-gray-100">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {/* Slider 1 */}
        <SwiperSlide>
          <div
            className="relative flex items-center justify-center h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://demo-alukas.myshopify.com/cdn/shop/files/alk_s3.jpg?v=1710139620&width=2880)",
            }}
          >
            <div className=" text-black p-4 md:p-8 lg:p-12 bg-opacity-50  rounded-md ml-[-1000px]">
              <h2 className="text-3xl md:text-5xl font-bold animate-slide-in-left">
                New S/S 2024
              </h2>
              <p className="text-base md:text-xl mt-2 md:mt-4 animate-slide-in-left">
                Amazing collections
              </p>
              <button className="mt-4 md:mt-8 px-4 md:px-6 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300 animate-slide-in-left">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slider 2 */}
        <SwiperSlide>
          <div
            className="relative flex items-center justify-center h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://demo-alukas.myshopify.com/cdn/shop/files/save_web_slide1_resize.jpg?v=1711681053&width=1920)",
            }}
          >
            <div className=" text-black p-4 md:p-8 lg:p-12 bg-opacity-50  rounded-md ml-[-1000px]">
              <h2 className="text-3xl md:text-5xl font-bold animate-slide-in-left">
                Discover Our <br /> New Collection
              </h2>
              <p className="text-base md:text-xl mt-2 md:mt-4 animate-slide-in-left">
                A modern take on fashion
              </p>
              <button className="mt-4 md:mt-8 px-4 md:px-6 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300 animate-slide-in-left">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slider 3 */}
        <SwiperSlide>
          <div
            className="relative flex items-center justify-center h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://demo-alukas.myshopify.com/cdn/shop/files/alk_s2.jpg?v=1710139621&width=2880)",
            }}
          >
            <div className=" text-black p-4 md:p-8 lg:p-12 bg-opacity-50  rounded-md ml-[-1000px]">
              <h2 className="text-3xl md:text-5xl font-bold animate-slide-in-left">
                Timeless Pieces
              </h2>
              <p className="text-base md:text-xl mt-2 md:mt-4 animate-slide-in-left">
                A symbol of elegance
              </p>
              <button className="mt-4 md:mt-8 px-4 md:px-6 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300 animate-slide-in-left">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Navigasyon Okları */}
        <div className="swiper-button-prev text-black text-2xl left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
        <div className="swiper-button-next text-black text-2xl right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
      </Swiper>
    </div>
  );
};

export default Slider;
