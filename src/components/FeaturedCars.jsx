// import React, { useState } from "react";
// import FeatureCarsCard from "./FeatureCarsCard";
// import MyContainer from "./MyContainer";
// import { motion } from "framer-motion";
// import { ClockLoader } from "react-spinners";
// const FeaturedCars = ({ data }) => {
//   console.log(data);
//   const [cars, setCars] = useState(data);

//   // const handleSearch = (e) => {
//   //   e.preventDefault();
//   //   const search_text = e.target.search.value;
//   //   if (!search_text) {
//   //     setCars(data);
//   //     return;
//   //   }
//   //   // console.log(search_text);
//   //   fetch(`https://car-site-fawn.vercel.app/search?search=${search_text}`)
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       console.log(data);
//   //       setCars(data);
//   //     });
//   // };

//   return (
//     <>
//       <div>
//         {/* <form
//           onSubmit={handleSearch}
//           className="flex justify-center gap-2 mt-10 mb-10 "
//         >
//           <label className="input rounded-full ">
//             <svg
//               className="h-[1em] opacity-50"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <g
//                 strokeLinejoin="round"
//                 strokeLinecap="round"
//                 strokeWidth="2.5"
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <circle cx="11" cy="11" r="8"></circle>
//                 <path d="m21 21-4.3-4.3"></path>
//               </g>
//             </svg>
//             <input name="search" type="search" placeholder="Search" />
//           </label>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="btn rounded-full bg-[#007bff] text-white"
//           >
//             Search
//           </motion.button>
//         </form> */}
//         <div className="bg-[#2B2A2A] py-[100px]">
//           {/* <div className="flex flex-col justify-center items-center">
//             <motion.h2
//               initial={{ opacity: 0, y: -50 }} // invisible & top
//               animate={{ opacity: 1, y: 0 }} // fade in & move down
//               transition={{ duration: 1, ease: "easeOut" }}
//               whileHover={{ scale: 1.05, y: -5 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="text-[32px] text-[#364d59] font-bold"
//             >
//               Our Featured Cars
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 50 }} // invisible & bottom
//               animate={{ opacity: 1, y: 0 }} // fade in & move up
//               transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // delay for stagger
//               whileHover={{ scale: 1.05, y: -5 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="w-[50%] text-center mt-4 text-[#888888]"
//             >
//               Discover our handpicked selection of top-quality cars, perfect for
//               any occasion. From stylish sedans to powerful SUVs, these featured
//               cars offer comfort, performance, and reliability for your next
//               journey. Explore the best options available and find your ideal
//               ride today!
//             </motion.p>
//           </div> */}
//           <MyContainer>
//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-12 ">
//               {cars.map((car) => (
//                 <FeatureCarsCard key={car._id} car={car} />
//               ))}
//             </div>
//           </MyContainer>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeaturedCars;

// ---------------------------------

import React, { useEffect, useState } from "react";
import FeatureCarsCard from "./FeatureCarsCard";
import MyContainer from "./MyContainer";
import { ClockLoader } from "react-spinners";

const FeaturedCars = ({ data }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fake loading delay (API feel দেওয়ার জন্য)
    setLoading(true);

    const timer = setTimeout(() => {
      setCars(data);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div className="bg-[#2B2A2A] py-[100px]">
      <MyContainer>
        {/* 🔄 Loading */}
        {loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <ClockLoader color="#7861CE" size={80} />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-12">
            {cars.map((car) => (
              <FeatureCarsCard key={car._id} car={car} />
            ))}
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default FeaturedCars;
