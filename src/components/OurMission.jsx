import React from "react";
import { motion } from "framer-motion";
import MyContainer from "./MyContainer";
import mission from "../assets/mission.jpg";
const OurMission = () => {
  return (
    <MyContainer>
      <div className="flex mt-[200px]">
        <div className="w-[60%]">
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
        </div>
        <div className="w-[40%]">
          <img className="h-full w-full" src={mission} alt="" />
        </div>
      </div>
    </MyContainer>
  );
};

export default OurMission;
