import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdCarRental } from "react-icons/md";
import MyContainer from "./MyContainer";

const Footer = () => {
  return (
    <div className="bg-gray-900 ">
      <MyContainer>
        <footer className=" text-gray-300 py-10 mt-10 ">
          <div className="container mx-auto px-6 grid  md:grid-cols-3 grid-cols-1 gap-8">
            {/* Logo + Website Name */}
            <div className="flex flex-col gap-2 ">
              <div className="flex gap-5">
                <MdCarRental className="text-[#F9FAFB] text-3xl" />
                <h1 className="text-white text-2xl font-semibold mb-5">
                  Car Rental
                </h1>
              </div>

              <div className="flex gap-4 mt-4 text-2xl">
                <FaFacebook className="hover:text-blue-500 cursor-pointer" />
                <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                <FaTwitter className="hover:text-sky-400 cursor-pointer" />
                <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
              </div>
            </div>

            {/* Contact Info */}
            <div className=" ">
              <h3 className="text-lg font-semibold text-white mb-3">
                Contact Info
              </h3>
              <p>Email: arnishasarkar122@gmail.com</p>
              <p>Phone: +880 1765 62 1002</p>
              <p>Address: Dhaka, Bangladesh</p>
            </div>

            {/* Terms & Social Links */}
            <div className="lg:text-right text-left">
              <h3 className="text-lg font-semibold text-white mb-3">
                Useful Links
              </h3>
              <ul>
                <li className="hover:text-blue-400 cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="hover:text-blue-400 cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center text-gray-500 mt-8 text-sm border-t border-gray-700 pt-4">
            Copyright ©2025 reserved | This website is made with Arnisha
          </div>
        </footer>
      </MyContainer>
    </div>
  );
};

export default Footer;
