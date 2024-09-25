import React from "react";
import { FaShippingFast, FaUndoAlt, FaLock, FaHeadset } from "react-icons/fa";
const Newletter = () => {
  return (
    <div>
      {" "}
      <div className="bg-[#F5F5F5] py-16 mt-32 h-[350px]">
        <div className="container mx-auto text-center mt-8">
          <h2 className="text-3xl font-semibold">Subscribe Newsletter</h2>
          <p className="text-gray-600 mt-2">
            Sign up to our Newsletter and get the discount code.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <input
              type="email"
              placeholder="Your email address..."
              className="border border-black  px-4 py-2 w-[450px] focus:outline-none h-12"
            />
            <button className="bg-black text-white px-6 py-2 h-12  ">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <FaShippingFast className="text-3xl mx-auto text-gray-700" />
          <h3 className="mt-4 text-lg font-semibold">Free Shipping</h3>
          <p className="text-gray-600">For all Orders Over $100</p>
        </div>

        <div>
          <FaUndoAlt className="text-3xl mx-auto text-gray-700" />
          <h3 className="mt-4 text-lg font-semibold">30 Days Returns</h3>
          <p className="text-gray-600">For an Exchange Product</p>
        </div>

        <div>
          <FaLock className="text-3xl mx-auto text-gray-700" />
          <h3 className="mt-4 text-lg font-semibold">Secured Payment</h3>
          <p className="text-gray-600">Payment Cards Accepted</p>
        </div>

        <div>
          <FaHeadset className="text-3xl mx-auto text-gray-700" />
          <h3 className="mt-4 text-lg font-semibold">Support 24/7</h3>
          <p className="text-gray-600">Contact us Anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
