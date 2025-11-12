import React from "react";
import MyContainer from "./MyContainer";
import img5 from "../assets/img5.avif";
import { motion } from "framer-motion";
const WhyRent = () => {
  return (
    <div className="my-16">
      <MyContainer>
        <div className="flex flex-col justify-center items-center ">
          <motion.h2
            initial={{ opacity: 0, y: -50 }} // invisible & top
            animate={{ opacity: 1, y: 0 }} // fade in & move down
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl font-bold mb-4 text-red"
            className="text-[32px] text-[#364d59] font-bold"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Why Rent With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }} // invisible & bottom
            animate={{ opacity: 1, y: 0 }} // fade in & move up
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // delay for stagger
            className="text-lg text-gray-700 max-w-xl"
            className="w-[50%] text-center mt-4 text-[#888888]"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Experience hassle-free car rentals with our trusted platform. We
            offer top-quality vehicles, transparent pricing, and excellent
            customer support to make your journey smooth and enjoyable. Choose
            us for reliability, convenience, and the best car rental experience
            every time.
          </motion.p>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-sm mt-7 gap-8">
          <figure className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <img src={img5} alt="Album" />
          </figure>
          <div className="card-body">
            <div className="flex flex-col gap-7">
              <div className="w-[90%] bg-[#f6f5f5] px-4 py-4  hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h2 className="text-[#364d59] text-[20px] font-semibold">
                  Trusted Car Rentals for Every Journey
                </h2>
                <p className="text-[#888888] font-medium">
                  Rent cars with confidence! We provide a wide selection of
                  high-quality vehicles, transparent pricing, and excellent
                  customer support to ensure your trips are smooth and
                  worry-free.
                </p>
              </div>
              <div className="w-[90%] bg-[#f6f5f5] px-4 py-4  hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h2 className="text-[#364d59] text-[20px] font-semibold">
                  Reliable Cars, Hassle-Free Rentals
                </h2>
                <p className="text-[#888888] font-medium">
                  Experience the convenience of renting top-notch vehicles with
                  ease. Our platform ensures safety, flexibility, and excellent
                  service so you can focus on enjoying the ride.
                </p>
              </div>
              <div className="w-[90%] bg-[#f6f5f5] px-4 py-4  hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h2 className="text-[#364d59] text-[20px] font-semibold">
                  Your Journey, Our Commitment
                </h2>
                <p className="text-[#888888] font-medium">
                  We make car rentals simple and reliable. From quality vehicles
                  to 24/7 support, we’re dedicated to making every trip a
                  memorable and stress-free experience.
                </p>
              </div>
              <div className="w-[90%] bg-[#f6f5f5] px-4 py-4  hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: -50 }} // invisible & top
                  animate={{ opacity: 1, y: 0 }} // fade in & move down
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="text-5xl font-bold mb-4 text-red"
                  className="text-[#364d59] text-[20px] font-semibold"
                >
                  Why Customers Choose Us
                </motion.h2>
                <p className="text-[#888888] font-medium">
                  Our customers trust us for affordable prices, well-maintained
                  cars, and seamless booking. Rent with us for convenience,
                  reliability, and an exceptional driving experience.
                </p>
              </div>
            </div>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div> */}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default WhyRent;
