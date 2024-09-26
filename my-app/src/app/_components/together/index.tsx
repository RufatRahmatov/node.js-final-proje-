"use client";

import React, { useState } from "react";

const Together = () => {
  const [selectedItems, setSelectedItems] = useState([1]);
  const products = [
    {
      id: 1,
      name: "True Stripes & Gold Charm",
      price: 129.0,
      originalPrice: 100.2,
      imgSrc:
        "https://demo-alukas.myshopify.com/cdn/shop/files/1_aa77cbf3-5780-442f-941e-cdbaa0c79566.jpg?v=1709716552&width=533",
    },
    {
      id: 2,
      name: "Birds Of Paradise Pendant",
      price: 149.0,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0691/9307/2864/files/Birds-of-Paradise-Pendant-2.jpg?v=1713578606&width=533",
    },
    {
      id: 3,
      name: "Blue Diamond Swing Ring",
      price: 399.0,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0691/9307/2864/files/1_59d81a48-9cc8-4a4d-9956-5934043eaa08.jpg?v=1709716432&width=533",
    },
    {
      id: 4,
      name: "Blue Stripes & Stone Earrings",
      price: 249.0,
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0691/9307/2864/files/1_82b29341-c859-42e8-a6df-fd1ea2298aa8.jpg?v=1709714541&width=533",
    },
  ];

  const handleCheckboxChange = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const calculateTotalPrice = () => {
    return products
      .filter((product) => selectedItems.includes(product.id))
      .reduce((total, product) => total + product.price, 0)
      .toFixed(2);
  };

  const calculateTotalSavings = () => {
    return products
      .filter((product) => selectedItems.includes(product.id))
      .reduce(
        (total, product) =>
          total + ((product.originalPrice ?? product.price) - product.price),
        0
      )
      .toFixed(2);
  };

  return (
    <div className="container mx-auto p-6 border border-gray-300  mt-8 w-[1300px]">
      <h2 className="text-2xl font-semibold mb-6 ml-10">
        Frequently Bought Together
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex flex-col items-center p-4  border-gray-300  ${
              selectedItems.includes(product.id) ? "bg-gray-100" : ""
            }`}
          >
            <img
              src={product.imgSrc}
              alt={product.name}
              className={`w-[150px] h-32 mb-2 cursor-pointer transition-transform transform ${
                selectedItems.includes(product.id) ? "scale-105" : ""
              }`}
              onClick={() => handleCheckboxChange(product.id)}
            />
            <input
              type="checkbox"
              className="mb-2 cursor-pointer"
              checked={selectedItems.includes(product.id)}
              onChange={() => handleCheckboxChange(product.id)}
            />
            <p className="text-center text-sm">
              <span
                className={`block ${
                  selectedItems.includes(product.id)
                    ? "text-black font-semibold"
                    : "text-gray-500"
                }`}
              >
                {product.name}
              </span>
              <span className="block text-gray-900 font-bold">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice &&
                product.originalPrice !== product.price && (
                  <span className="block text-gray-500 line-through">
                    ${product.originalPrice?.toFixed(2) ?? ""}
                  </span>
                )}
            </p>
          </div>
        ))}

        <div className="col-span-1 md:col-span-1 flex flex-col items-center p-4  border-gray-300 ">
          <p className="text-gray-600 text-sm mb-2">Total price:</p>
          <p className="text-2xl font-bold mb-2">${calculateTotalPrice()}</p>
          <button className="bg-gray-800 text-white py-2 px-4  mb-2 w-full">
            Add selected item(s)
          </button>
          <p className="text-gray-600 text-sm">
            You are saving:{" "}
            <span className="text-green-500 font-semibold">
              ${calculateTotalSavings()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Together;
