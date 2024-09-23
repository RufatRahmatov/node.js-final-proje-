import { FC } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaHeadphones,
} from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal } from "react-icons/si";

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-gray-700">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-semibold">ALUKAS & CO</h2>
          <p className="text-gray-500">Gold & Diamonds</p>
        </div>

        {/* About Alukas */}
        <div>
          <h3 className="font-semibold text-gray-900">About Alukas</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-gray-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Core Values
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Press Releases
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="font-semibold text-gray-900">Our Company</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-gray-600">
                Shopping App
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Be An Affiliate
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Advertise Your Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Media Enquires
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Other Services
              </a>
            </li>
          </ul>
        </div>

        {/* Store Details */}
        <div>
          <h3 className="font-semibold text-gray-900">Store Details</h3>
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <FaHeadphones className="text-gray-600" />
              <span>Need Any Help? (+800) 1234 56</span>
            </div>
            <div>
              <p>Address: 502 New Design Str, Melbourne, Australia</p>
              <p>Email: alukas@domain.com</p>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-gray-900">Follow Us</h3>
          <div className="mt-4 flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-600">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaTiktok />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Payment Icons and Copyright */}
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <div className="flex space-x-4">
          {/* <SiMaestro className="text-2xl" /> */}
          <SiPaypal className="text-2xl" />
          <SiVisa className="text-2xl" />
          <SiMastercard className="text-2xl" />
        </div>
        <p className="mt-4 md:mt-0">
          Copyright © Alukas all rights reserved. Powered by Bersky.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
