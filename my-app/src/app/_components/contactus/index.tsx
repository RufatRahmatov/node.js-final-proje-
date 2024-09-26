"use client"; // Client-side rendering üçün

import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    comment: "",
  });
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          comment: "",
        });
      } else {
        setSuccess("Your message has been sent successfully!.");
      }
    } catch {
      setSuccess("There was an error sending your message.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen border border-b-0 ">
      <h1 className="text-4xl font-medim mb-8">Have a question? Contact us!</h1>
      <form onSubmit={handleSubmit} className="w-[1000px]  bg-white p-8 ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full  text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none "
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              className="appearance-none block w-full  text-gray-700 border  py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <input
            className="appearance-none block w-full  text-gray-700 border  py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />
        </div>
        <div className="mb-6">
          <textarea
            className="appearance-none block w-full h-[300px] text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Write Your Comment..."
            rows={5}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-4  focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Send Message
          </button>
        </div>
        {success && (
          <div className="mt-4 text-center text-green-500">{success}</div>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
