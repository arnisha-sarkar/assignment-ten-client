import React, { useState } from "react";
import FeatureCarsCard from "./FeatureCarsCard";
import MyContainer from "./MyContainer";
import { motion } from "framer-motion";
const FeaturedCars = ({ data }) => {
  console.log(data);
  const [cars, setCars] = useState(data);
  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    if (!search_text) {
      setCars(data); // খালি হলে সব দেখাবে
      return;
    }
    // console.log(search_text);
    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCars(data);
      });
  };
  return (
    <>
      <div>
        <form
          onSubmit={handleSearch}
          className="flex justify-center gap-2 mt-10 mb-10 "
        >
          <label className="input rounded-full ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="search" type="search" placeholder="Search" />
          </label>
          <button className="btn rounded-full bg-[#007bff] text-white">
            Search
          </button>
        </form>
        <div>
          <div className="flex flex-col justify-center items-center ">
            <motion.h2
              initial={{ opacity: 0, y: -50 }} // invisible & top
              animate={{ opacity: 1, y: 0 }} // fade in & move down
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-[32px] text-[#364d59] font-bold"
            >
              Our Featured Cars
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }} // invisible & bottom
              animate={{ opacity: 1, y: 0 }} // fade in & move up
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // delay for stagger
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-[50%] text-center mt-4 text-[#888888]"
            >
              Discover our handpicked selection of top-quality cars, perfect for
              any occasion. From stylish sedans to powerful SUVs, these featured
              cars offer comfort, performance, and reliability for your next
              journey. Explore the best options available and find your ideal
              ride today!
            </motion.p>
          </div>
          <MyContainer>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-12">
              {cars.map((car) => (
                <FeatureCarsCard key={car._id} car={car} />
              ))}
            </div>
          </MyContainer>
        </div>
      </div>
    </>
  );
};

export default FeaturedCars;
