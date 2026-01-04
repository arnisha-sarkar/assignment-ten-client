import React from "react";
import { motion } from "framer-motion";
import MyContainer from "./MyContainer";
import mission from "../assets/mission.jpg";
import logo1 from "../assets/carLogo.jpg";
import logo2 from "../assets/carLogo2.webp";
import logo3 from "../assets/carLogo3.jpg";
const OurMission = () => {
  const logos = [logo1, logo2, logo3];
  return (
    <MyContainer>
      <div className="flex flex-col lg:flex-row mt-[200px]">
        <div className="lg:w-[60%] w-full">
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
          <h2 className="my-12  text-5xl font-normal w-[70%] leading-14">
            Discover a wide range of well-maintained cars designed to suit every{" "}
            <br />
            need from daily commutes to long road trips. Enjoy affordable
            pricing
          </h2>
          <div className="overflow-hidden relative">
            <motion.div
              className="flex gap-8 w-max"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {logos.concat(logos).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-48 h-24 bg-white rounded-lg shadow-md"
                >
                  <img
                    src={logo}
                    alt={`logo-${index}`}
                    className="max-h-16 object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="lg:w-[40%] w-full">
          <img className="h-full w-full" src={mission} alt="" />
        </div>
      </div>
    </MyContainer>
  );
};

export default OurMission;
