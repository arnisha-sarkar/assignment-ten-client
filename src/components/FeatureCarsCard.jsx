import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
const FeatureCarsCard = ({ car }) => {
  const { name, category, rentPrice, _id, Provider_Name, description } = car;
  return (
    <div className="border border-[#354EA0]">
      <div className="card transition-all duration-300 hover:-translate-y-2 my-5 mx-2.5">
        <motion.div
          className="h-[40vh] overflow-hidden rounded-t-xl"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            className="w-full h-full"
            src={car.thumbnail}
            alt=""
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>
        <motion.div
          className="card bg-base-100 shadow-lg rounded-xl overflow-hidden w-full h-[60vh]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="card-body"
        >
          <h2 className="card-title text-[#fff] text-2xl font-semibold mx-auto">
            {name}
          </h2>
          <p className="card-title text-[#fff] text-[16px] font-normal text-center mx-auto">
            {description.length > 70
              ? description.slice(0, 70) + " " + "..."
              : description}
          </p>
          <p className="line-clamp-1 text-[#7861CE] font-bold text-[18px] font-medium text-center">
            $ {rentPrice}
          </p>
          <div className="text-white bg-[#7861CE] border-none badge text-[18px] py-5 px-4 rounded-full my-2.5 mx-auto">
            {category}
          </div>
          <p className="text-[20px] text-[#fff] text-center">
            Provider: {Provider_Name}
          </p>

          {/* <p>Available</p> */}
          {/* <p className="text-sm text-base-content/70">by {author}</p> */}
          <div className="card-actions justify-between items-center mt-4 mx-auto">
            <div className="flex gap-4 text-sm text-base-content/60 w-full"></div>
            <Link to={`/featured/${car._id}`}>
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
                className="px-8 py-3 bg-[#003366] rounded-md cursor-pointer text-white"
              >
                Explore Options
              </motion.button>
            </Link>
            {/* <Link
              to={`/featured/${car._id}`}
              className="btn rounded-full bg-[#007bff] hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm"
            >
              View Details
            </Link> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureCarsCard;
