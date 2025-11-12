import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
const FeatureCarsCard = ({ car }) => {
  const { name, category, rentPrice, _id, Provider_Name } = car;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <motion.div
          className="card bg-base-100 shadow-lg rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="card-body"
        >
          <h2 className="card-title text-[#364d59] text-2xl">{name}</h2>
          <p className="line-clamp-1 text-[#0779e4] text-[18px] font-medium">
            {rentPrice}
          </p>
          <div className="text-white bg-[#364d59] badge text-[18px] py-2 rounded-full my-2.5">
            {category}
          </div>
          <p className="text-[20px] text-[#364d59]">
            Provider: {Provider_Name}
          </p>

          {/* <p>Available</p> */}
          {/* <p className="text-sm text-base-content/70">by {author}</p> */}
          <div className="card-actions justify-between items-center mt-4">
            <div className="flex gap-4 text-sm text-base-content/60">
              {/* <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {views}
            </span> */}
              {/* <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {likes}
            </span> */}
            </div>
            {/* <Link
              to={`/update/${car._id}`}
              //   to={`/model-details/${_id}`}
              className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm"
            >
              Upadate
            </Link> */}
            <Link
              to={`/featured/${car._id}`}
              className="btn rounded-full bg-[#007bff] hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm"
            >
              View Details
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureCarsCard;
