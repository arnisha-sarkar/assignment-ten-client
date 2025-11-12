import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }} // শুধু zoom হবে
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="inline-block"
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-[#364d59]"
            : `${className} font-semibold text-[#007bff] lg:text-lg md:text-base text-sm`
        }
      >
        {children}
      </NavLink>
    </motion.div>
  );
};

export default MyLink;
