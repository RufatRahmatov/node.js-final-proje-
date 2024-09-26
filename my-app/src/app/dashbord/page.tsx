"use client";

import React from "react";
import Layouts from "../_layouts/layout";
import { useCart } from "../_components/context/CartContext";
import { FaTimes } from "react-icons/fa";

interface Product {
  _id: string;
  name: string;
  price: number;
  discount?: number;
  image: string;
  hoverImage?: string;
  status?: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const Dashboard: React.FC = () => {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (product: Product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  return (
    <Layouts>
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">Shopping Cart</h2>
        {state.cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {state.cart.map((item: CartItem) => (
              <li
                key={item.product._id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-contain"
                  />
                  <div>
                    <h4 className="font-medium">{item.product.name}</h4>
                    <p className="text-gray-600">${item.product.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleRemoveFromCart(item.product)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-8 text-right">
          <h3 className="text-2xl font-semibold">
            Total: $
            {state.cart.reduce(
              (total: number, item: CartItem) =>
                total + item.product.price * item.quantity,
              0
            )}
          </h3>
          <button className="bg-black text-white px-6 py-2 mt-4 rounded-md hover:bg-gray-800">
            Checkout
          </button>
        </div>
      </main>
    </Layouts>
  );
};

export default Dashboard;
