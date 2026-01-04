import React from "react";
import MyContainer from "./MyContainer";
import img5 from "../assets/team.avif";
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
              {[
                {
                  title: "Trusted Car Rentals for Every Journey",
                  desc: "Rent cars with confidence! We provide a wide selection of high-quality vehicles, transparent pricing, and excellent customer support to ensure your trips are smooth and worry-free.",
                },
                {
                  title: "Reliable Cars, Hassle-Free Rentals",
                  desc: "Experience the convenience of renting top-notch vehicles with ease. Our platform ensures safety, flexibility, and excellent service so you can focus on enjoying the ride.",
                },
                {
                  title: "Your Journey, Our Commitment",
                  desc: "We make car rentals simple and reliable. From quality vehicles to 24/7 support, we’re dedicated to making every trip a memorable and stress-free experience.",
                },
                {
                  title: "Why Customers Choose Us",
                  desc: "Our customers trust us for affordable prices, well-maintained cars, and seamless booking. Rent with us for convenience, reliability, and an exceptional driving experience.",
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className="w-[90%] bg-[#f6f5f5] px-4 py-4 rounded-md shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <h2 className="text-[#364d59] text-[20px] font-semibold mb-2">
                    {card.title}
                  </h2>
                  <p className="text-[#888888] font-medium">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default WhyRent;
