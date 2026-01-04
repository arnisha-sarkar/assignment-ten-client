import React from "react";

import { motion } from "framer-motion";
import { NavLink } from "react-router";

const MyLink = ({ to, className = "", children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="inline-block"
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          `
          relative font-semibold lg:text-lg md:text-base text-sm
          text-white ${className}

          after:content-['']
          after:absolute after:left-0 after:-bottom-2
          after:h-[2px] after:bg-white
          after:transition-all after:duration-300

          ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
          `
        }
      >
        {children}
      </NavLink>
    </motion.div>
  );
};

export default MyLink;
