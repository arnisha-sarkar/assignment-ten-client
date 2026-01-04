import { useState } from "react";
import { motion } from "framer-motion";

const ReviewCard = ({ review }) => {
  // console.log(review);
  const [readMore, setReadMore] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-[#191919] shadow-lg rounded-xl p-6 h-full"
    >
      {/* Profile */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={review.profileImage}
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-[#fff] font-semibold">
            {review.name}
          </h4>
          <p className="text-sm text-[#fff]">{review.date}</p>
        </div>
      </div>

      {/* Review Title */}
      <h3 className="text-lg font-semibold mb-2 text-white">{review.review}</h3>

      {/* Description */}
      <p className="text-white text-sm">
        {readMore
          ? review.description
          : `${review.description.slice(0, 90)}...`}
      </p>

      {/* Read More */}
      <button
        onClick={() => setReadMore(!readMore)}
        className="text-[#fff] text-sm font-medium mt-2"
      >
        {readMore ? "Read Less" : "Read More"}
      </button>
    </motion.div>
  );
};

export default ReviewCard;
