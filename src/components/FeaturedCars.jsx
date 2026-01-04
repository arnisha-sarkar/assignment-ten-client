import React, { useEffect, useState } from "react";
import FeatureCarsCard from "./FeatureCarsCard";
import MyContainer from "./MyContainer";
import { ClockLoader } from "react-spinners";
import { motion } from "framer-motion";

const FeaturedCars = ({ data }) => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setCars(data);
      setFilteredCars(data);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [data]);

  // 🔍 Search handler
  useEffect(() => {
    const result = cars.filter((car) =>
      `${car.name} ${car.category} ${car.location}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    setFilteredCars(result);
  }, [search, cars]);

  return (
    <div className="bg-[#2B2A2A] py-[100px]">
      <MyContainer>
        {/* 🔍 Search Bar */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search by car name, category or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[500px] px-5 py-3 rounded-full outline-none
            bg-white text-gray-700 shadow-lg focus:ring-2 "
          />
        </div>

        {/* 🔄 Loading */}
        {loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <ClockLoader color="#7861CE" size={80} />
          </div>
        ) : filteredCars.length === 0 ? (
          <p className="text-center text-gray-300 text-xl mt-20">
            No cars found 😔
          </p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-12"
          >
            {filteredCars.map((car) => (
              <FeatureCarsCard key={car._id} car={car} />
            ))}
          </motion.div>
        )}
      </MyContainer>
    </div>
  );
};

export default FeaturedCars;
