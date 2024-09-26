"use client";

import React, { useState } from "react";

const Outstanding = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    "Description",
    "Customer Reviews",
    "Shipping & Returns",
    "Return Policies",
  ];

  return (
    <div className="container mx-auto p-6 border mt-16 border-r-0 border-l-0">
      <div className="flex justify-center space-x-8 mb-6">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`relative cursor-pointer ${
              activeTab === index ? "text-black font-semibold" : "text-gray-600"
            }`}
            onMouseEnter={() => setActiveTab(index)}
            onMouseLeave={() => setActiveTab(-1)}
          >
            <span className="hover:text-black">{tab}</span>
            {activeTab === index && (
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-black transition-all duration-300"
                style={{ width: "100%", transform: "translateX(0)" }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-[100px] mt-5">
        <div>
          <h3 className="text-xl font-semibold mb-4">Outstanding Features</h3>
          <p className="text-gray-600 mb-4">
            The garments labelled as committed are products that have been
            produced using sustainable fibres or processes, reducing their
            environmental impact. Umino’s goal is to support the implementation
            of practices more committed to the environment.
          </p>
          <ul className="list-none space-y-2 text-gray-600">
            <li>— Tonal stitching: 98% cotton, 2% elastane.</li>
            <li>— Supple and stretch knit with a rich touch of wool.</li>
            <li>— Model: Model is 6’1’’, wearing a size M.</li>
            <li>— Caring for your clothes is caring for the environment.</li>
          </ul>
          <p className="text-gray-600 mt-4">
            We work with monitoring programmes to ensure compliance with our
            social, environmental and health and safety standards for our
            garments. To assess compliance, we have developed a programme of
            audits and continuous improvement plans. Made of super-soft cotton,
            the Organic Cotton Cutaway Tank features a high neck and back, and a
            slight curve at the shoulders, which makes it extra flattering. If
            there’s one thing the ’90s got right, it’s the basics.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Washing Instructions</h3>
          <ul className="list-none space-y-4">
            <li className="flex items-center text-gray-600">
              <img
                src="https://img.icons8.com/material-outlined/24/000000/washing-machine.png"
                alt="Machine Wash"
                className="mr-2"
              />
              Machine wash max. 30°C. Short spin.
            </li>
            <li className="flex items-center text-gray-600">
              <img
                src="https://img.icons8.com/material-outlined/24/000000/iron.png"
                alt="Iron"
                className="mr-2"
              />
              Iron maximum 110°C.
            </li>
            <li className="flex items-center text-gray-600">
              <img
                src="https://img.icons8.com/material-outlined/24/000000/washing-machine.png"
                alt="Do Not Bleach"
                className="mr-2"
              />
              Do not bleach/bleach.
            </li>
            <li className="flex items-center text-gray-600">
              <img
                src="https://img.icons8.com/material-outlined/24/000000/washing-machine.png"
                alt="Do Not Dry Clean"
                className="mr-2"
              />
              Do not dry clean.
            </li>
            <li className="flex items-center text-gray-600">
              <img
                src="https://img.icons8.com/material-outlined/24/000000/washing-machine.png"
                alt="Tumble Dry"
                className="mr-2"
              />
              Tumble dry, medium heat.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Outstanding;
