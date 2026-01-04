import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdCarRental } from "react-icons/md";
import MyContainer from "./MyContainer";
import { motion } from "framer-motion";
import { Link } from "react-router";
const Footer = () => {
  return (
    <div className="bg-[#001737]">
      <MyContainer>
        <footer className=" text-gray-300 py-10 mt-10 ">
          <div className="container mx-auto px-6 grid  md:grid-cols-4 grid-cols-1 gap-8">
            {/* Logo + Website Name */}
            <div className="flex flex-col gap-2 ">
              <div className="flex gap-5">
                <MdCarRental className="text-[#F9FAFB] text-3xl" />
                <Link to={"/"}>
                  <motion.h2
                    initial={{ opacity: 0, y: -50 }} // invisible & top
                    animate={{ opacity: 1, y: 0 }} // fade in & move down
                    transition={{ duration: 1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-white text-2xl font-semibold mb-5"
                  >
                    Car Rental
                  </motion.h2>
                </Link>
              </div>

              <div className="flex gap-4 mt-2 text-2xl">
                <a href="https://www.linkedin.com/in/arnishasarkar/">
                  <FaLinkedin className="hover:text-[#003366] cursor-pointer" />
                </a>
                <a href="https://facebook.com">
                  <FaFacebook
                    className="hover:text-[#003366] cursor-pointer"
                    target="_blank"
                  />
                </a>
                <a href="https:instagram.com">
                  <FaInstagram className="hover:text-[#003366]cursor-pointer" />
                </a>
                <FaTwitter className="hover:text-[#003366] cursor-pointer" />
              </div>
            </div>

            {/* Contact Info */}
            <div className=" ">
              <h3 className="text-lg font-semibold text-white mb-3">
                Services
              </h3>
              <p>Email: arnishasarkar122@gmail.com</p>
              <p>Phone: +880 1765 62 1002</p>
              <p>Address: Dhaka, Bangladesh</p>
            </div>
            <div className=" ">
              <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
              <p>Email: arnishasarkar122@gmail.com</p>
              <p>Phone: +880 1765 62 1002</p>
              <p>Address: Dhaka, Bangladesh</p>
            </div>
            <div className=" ">
              <h3 className="text-lg font-semibold text-white mb-3">
                Contact Info
              </h3>
              <p>Email: arnishasarkar122@gmail.com</p>
              <p>Phone: +880 1765 62 1002</p>
              <p>Address: Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Bottom Text */}
          <div className=" text-white mt-8 text-sm border-t border-gray-700 pt-4 flex justify-between">
            ©2025 reserved | This website is made with Arnisha
            <div className="flex gap-4">
              <Link to={"/terms"}>Terms of Use</Link>
              <Link to={"/privacy"}>Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </MyContainer>
    </div>
  );
};

export default Footer;
