import React, { useState } from "react";
import MyContainer from "../components/MyContainer";
import { motion } from "framer-motion";
import { MdCarRental } from "react-icons/md";
import { Link } from "react-router";
const Contact = () => {
  const [scrolled, setScrolled] = useState(false);
  return (
    <div className="bg-[#101010]">
      <MyContainer>
        <div className=" h-[150vh]">
          <div className="ml-20">
            <motion.h2
              className="text-[56px] font-extrabold text-white pt-[200px] relative inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Contact Us
              <motion.span
                className="absolute left-0 -bottom-2 w-[215px] h-2 bg-[#7861CE]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              ></motion.span>
            </motion.h2>

            <motion.h4
              className="font-bold text-white mt-8 text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Tel: +29 80 652 1683
            </motion.h4>

            <motion.h4
              className="font-bold text-white mt-2 text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Mail: hello@carrental.com
            </motion.h4>
          </div>
          <div className="flex items-center justify-center ">
            <Link to="/">
              <MdCarRental
                className={`text-8xl ${scrolled ? "text-white" : "text-white"}`}
              />
            </Link>
          </div>
          <form className="flex flex-col items-center mt-20" action="">
            <div className="flex gap-5">
              <label>
                <input
                  className="border border-white w-[500px]   text-white px-3 py-3"
                  type="name"
                  placeholder="Name"
                />
              </label>
              <label>
                <input
                  className="border border-white w-[500px]   text-white px-3 py-3"
                  type="email"
                  placeholder="Email"
                />
              </label>
            </div>
            <label>
              <input
                className="border border-white w-[1000px]
                my-12 text-white px-3 py-3"
                type="number"
                placeholder="Number"
              />
            </label>
            <textarea
              className="border border-white w-[1000px]   text-white px-3 py-12"
              name="message"
              id=""
              placeholder="Message"
            ></textarea>
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              className="px-8 py-3 bg-[#003366] rounded-md cursor-pointer text-white w-[1000px] mt-6"
            >
              Read Our Story
            </motion.button>
          </form>
        </div>
      </MyContainer>
    </div>
  );
};

export default Contact;
