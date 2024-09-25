import React from "react";
import { TfiHome } from "react-icons/tfi";

export default function Findstore() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F9EBF9] mt-10 w-full px-4 md:w-[1508px] md:h-[110px] md:ml-[200px]">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <span className="text-xl md:text-3xl flex items-center gap-4 text-center">
          <TfiHome className="text-3xl" />
          Find Shops Near You
        </span>
        <button className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300 w-full md:w-36">
          Find Store
        </button>
      </div>
    </div>
  );
}
