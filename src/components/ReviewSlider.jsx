import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { motion } from "framer-motion";

import reviews from "../review";
import ReviewCard from "./ReviewCard";
import MyContainer from "./MyContainer";
import { MdCarRental } from "react-icons/md";
const ReviewSlider = () => {
  return (
    <div className="bg-[#000] py-[100px] mt-[200px]">
      <MyContainer>
        {/* Section Header */}
        <MdCarRental className="text-white text-9xl mx-auto mb-20" />
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -6, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250 }}
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
          viewport={{ once: true }}
          className="text-5xl text-[#7861CE] text-center font-extrabold"
        >
          "ON TIME EVERY TIME"
        </motion.h2>

        <motion.h3
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -6, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className="text-2xl text-white font-semibold text-center my-5"
        >
          EXCELLENT
        </motion.h3>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            type: "spring",
            stiffness: 250,
          }}
          viewport={{ once: true }}
          className="text-5xl text-yellow-400 text-center mb-12"
        >
          ⭐⭐⭐⭐⭐
        </motion.div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 60, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 130,
                }}
                whileHover={{
                  scale: 1.07,
                  rotateY: 5,
                  rotateX: -5,
                  y: -10,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
                }}
                className="h-full cursor-pointer rounded-2xl"
              >
                <ReviewCard review={item} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </MyContainer>
    </div>
  );
};

export default ReviewSlider;
