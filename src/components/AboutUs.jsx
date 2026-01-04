import React from "react";
import { motion } from "framer-motion";
import MyContainer from "./MyContainer";

const AboutUs = () => {
  return (
    <MyContainer>
      <div className="flex flex-wrap  my-16 py-4">
        {/* LEFT SIDE */}
        <div className="lg:w-[50%] w-full text-center flex flex-col justify-center items-center h-[300px] ">
          {/* Divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 250, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[1.5px] bg-[#003366]"
          />

          {/* Title */}
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ y: -6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            viewport={{ once: true }}
            className="text-[65px] font-normal text-[#7861CE] my-3 cursor-pointer"
          >
            About
          </motion.h2>

          {/* Button */}
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
            className="px-8 py-3 bg-[#003366] rounded-md cursor-pointer text-white"
          >
            Read Our Story
          </motion.button>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-[50%] w-full text-justify flex flex-col justify-center px-5 space-y-4 ">
          {/* Paragraph 1 */}
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="cursor-pointer"
          >
            We are a trusted car rental service dedicated to making your travel
            easy, comfortable, and stress-free. Our mission is to provide
            reliable vehicles and a smooth booking experience for every
            customer, whether you need a car for daily use, business travel, or
            a special trip.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            viewport={{ once: true }}
            className="cursor-pointer"
          >
            With a wide range of well-maintained vehicles, from economy cars to
            luxury models, we ensure there’s a perfect ride for every journey.
            We focus on transparent pricing, flexible rental plans, and safety,
            so you can drive with confidence and peace of mind.
          </motion.p>

          {/* Paragraph 3 */}
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            viewport={{ once: true }}
            className="cursor-pointer"
          >
            Our team is committed to delivering excellent customer support and
            continuous service improvement. At DriveEase, we believe renting a
            car should be simple, affordable, and enjoyable—because your journey
            matters to us.
          </motion.p>
        </div>
      </div>
    </MyContainer>
  );
};

export default AboutUs;
