import React from "react";
import MyContainer from "./MyContainer";
import { motion } from "framer-motion";
import topcar1 from "../assets/topcar1.avif";
import topcar2 from "../assets/topcar2.avif";
import topcar3 from "../assets/topcar3.avif";
const TopRated = () => {
  return (
    <MyContainer>
      <div className="flex flex-col justify-center items-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }} // invisible & top
          animate={{ opacity: 1, y: 0 }} // fade in & move down
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-[32px] text-[#364d59] font-bold"
        >
          Our Top Rated Cars
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }} // invisible & bottom
          animate={{ opacity: 1, y: 0 }} // fade in & move up
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // delay for stagger
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-[50%] text-center mt-4 text-[#888888]"
        >
          Discover our handpicked selection of top-quality cars, perfect for any
          occasion. From stylish sedans to powerful SUVs, these featured cars
          offer comfort, performance, and reliability for your next journey.
          Explore the best options available and find your ideal ride today!
        </motion.p>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-20">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={topcar1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Electric Luxury</h2>
              <p>
                Description: Experience the future of driving with the Tesla
                Model 3. This all-electric sedan combines cutting-edge
                technology, impressive acceleration, and eco-friendly
                performance. Perfect for city drives or weekend getaways with
                style and comfort.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={topcar2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ultimate SUV Adventure</h2>
              <p>
                Description: Command the road with the BMW X5, a premium SUV
                offering luxury, space, and powerful performance. Equipped with
                advanced safety features and a smooth ride, it’s ideal for
                family trips or long-distance adventures.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={topcar3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Executive Elegance</h2>
              <p>
                Drive in sophistication with the Mercedes-Benz C-Class. With
                plush interiors, superior handling, and modern tech, this sedan
                provides a refined driving experience. Perfect for business
                trips, special occasions, or a classy city cruise.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default TopRated;
