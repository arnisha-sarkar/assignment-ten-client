// import React from "react";
// import MyContainer from "./MyContainer";
// import { motion } from "framer-motion";
// import topcar1 from "../assets/top1.jpg";
// import topcar2 from "../assets/top2.jpg";
// import topcar3 from "../assets/top3.jpg";
// const TopRated = () => {
//   return (
//     <MyContainer>
//       <div className="flex flex-col justify-center items-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }} // invisible & top
//           animate={{ opacity: 1, y: 0 }} // fade in & move down
//           transition={{ duration: 1, ease: "easeOut" }}
//           whileHover={{ scale: 1.05, y: -5 }}
//           transition={{ type: "spring", stiffness: 300 }}
//           className="text-[32px] text-[#364d59] font-bold"
//         >
//           Our Top Rated Cars
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 50 }} // invisible & bottom
//           animate={{ opacity: 1, y: 0 }} // fade in & move up
//           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // delay for stagger
//           whileHover={{ scale: 1.05, y: -5 }}
//           transition={{ type: "spring", stiffness: 300 }}
//           className="w-[50%] text-center mt-4 text-[#888888]"
//         >
//           Discover our handpicked selection of top-quality cars, perfect for any
//           occasion. From stylish sedans to powerful SUVs, these featured cars
//           offer comfort, performance, and reliability for your next journey.
//           Explore the best options available and find your ideal ride today!
//         </motion.p>
//       </div>
//       <div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-20">
//           <div className="card bg-base-100 w-96 shadow-sm">
//             <figure className="h-[300px] object-cover">
//               <img className="w-full h-full" src={topcar1} alt="Shoes" />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">Electric Luxury</h2>
//               <p>
//                 Description: Experience the future of driving with the Tesla
//                 Model 3. This all-electric sedan combines cutting-edge
//                 technology, impressive acceleration, and eco-friendly
//                 performance. Perfect for city drives or weekend getaways with
//                 style and comfort.
//               </p>
//               <div className="card-actions justify-end">
//                 <motion.button
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   whileHover={{ scale: 1.08 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   viewport={{ once: true }}
//                   className="px-8 py-3 bg-[#003366] rounded-md cursor-pointer text-white"
//                 >
//                   Buy Now
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//           <div className="card bg-base-100 w-96 shadow-sm">
//             <figure className="h-[300px] object-cover">
//               <img className="w-full h-full" src={topcar2} alt="Shoes" />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">Ultimate SUV Adventure</h2>
//               <p>
//                 Description: Command the road with the BMW X5, a premium SUV
//                 offering luxury, space, and powerful performance. Equipped with
//                 advanced safety features and a smooth ride, it’s ideal for
//                 family trips or long-distance adventures.
//               </p>
//               <div className="card-actions justify-end">
//                 <motion.button
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   whileHover={{ scale: 1.08 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   viewport={{ once: true }}
//                   className="px-8 py-3 bg-[#003366] rounded-md cursor-pointer text-white"
//                 >
//                   Buy Now
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//           <div className="card bg-base-100 w-96 shadow-sm">
//             <figure className="h-[300px] object-cover">
//               <img className="w-full h-full" src={topcar3} alt="Shoes" />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">Executive Elegance</h2>
//               <p>
//                 Drive in sophistication with the Mercedes-Benz C-Class. With
//                 plush interiors, superior handling, and modern tech, this sedan
//                 provides a refined driving experience. Perfect for business
//                 trips, special occasions, or a classy city cruise.
//               </p>
//               <div className="card-actions justify-end">
//                 <motion.button
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   whileHover={{ scale: 1.08 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   viewport={{ once: true }}
//                   className="px-8 py-3 bg-[#003366] rounded-md cursor-pointer text-white"
//                 >
//                   Buy Now
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </MyContainer>
//   );
// };

// export default TopRated;
// --------------------------------
import React from "react";
import MyContainer from "./MyContainer";
import { motion } from "framer-motion";
import topcar1 from "../assets/top1.jpg";
import topcar2 from "../assets/top2.jpg";
import topcar3 from "../assets/top3.jpg";

const titleVariant = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TopRated = () => {
  return (
    <MyContainer>
      {/* ===== Header ===== */}
      <div className="flex flex-col justify-center items-center mt-[200px]">
        <motion.h2
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[32px] text-[#364d59] font-bold"
        >
          Our Top Rated Cars
        </motion.h2>

        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-[50%] text-center mt-4 text-[#888888]"
        >
          Discover our handpicked selection of top-quality cars, perfect for any
          occasion. From stylish sedans to powerful SUVs, these featured cars
          offer comfort, performance, and reliability for your next journey.
        </motion.p>
      </div>

      {/* ===== Cards ===== */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-20"
      >
        {[topcar1, topcar2, topcar3].map((img, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ y: -10 }}
            className="card bg-base-100 w-96 shadow-md hover:shadow-xl transition-shadow"
          >
            <figure className="h-[300px] overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
                src={img}
                alt="car"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                {index === 0 && "Electric Luxury"}
                {index === 1 && "Ultimate SUV Adventure"}
                {index === 2 && "Executive Elegance"}
              </h2>

              <p className="text-sm text-gray-600">
                Premium comfort, powerful performance, and modern design—perfect
                for your next journey.
              </p>

              <div className="card-actions justify-end">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="px-8 py-3 bg-[#003366] rounded-md cursor-pointer text-white"
                >
                  Buy Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </MyContainer>
  );
};

export default TopRated;
