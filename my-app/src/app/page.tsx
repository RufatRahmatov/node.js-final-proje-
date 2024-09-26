"use client";

import { useState } from "react";
import Register from "./register/page";
import Login from "./login/page";
// import { CartProvider } from "./context/CartContext";
export default function Home() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {showRegister ? (
        <Register onBackClick={() => setShowRegister(false)} />
      ) : (
        <Login onCreateAccountClick={() => setShowRegister(true)} />
      )}
    </div>
  );
}
