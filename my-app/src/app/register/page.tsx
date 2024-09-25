"use client";

import React, { useState } from "react";
import { FiXCircle, FiEye, FiEyeOff } from "react-icons/fi";

interface RegisterProps {
  onBackClick: () => void;
}

const Register: React.FC<RegisterProps> = ({ onBackClick }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: name,
          usersurname: surname,
          email,
          password,
        }),
      });
      if (response.ok) {
        onBackClick();
      } else {
        const data = await response.json();
        console.error("Registration error:", data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="bg-white p-10 rounded-lg w-96 shadow-md w-[500px] h-[550px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Create Account</h2>
        <button onClick={onBackClick}>
          <FiXCircle />
        </button>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="First name"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Last name"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Your email*"
            required
          />
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Password*"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-4"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>

        <button
          type="button"
          className="w-full bg-black text-white py-3 rounded-md mb-4"
          onClick={onBackClick}
        >
          Login
        </button>
        <button
          type="button"
          className="w-full border border-black text-black py-3 rounded-md hover:bg-black hover:text-white transition-all duration-300"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
