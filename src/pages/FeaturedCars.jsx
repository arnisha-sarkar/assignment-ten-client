// import { Link, useLoaderData } from "react-router";

// const FeaturedCars = () => {
//   const data = useLoaderData();
//   const cars = data.result;
//   console.log(cars);

//   return (
//     <div>
//       <div className="max-w-4xl mx-auto my-10">
//         <div className="card lg:card-side bg-base-100 shadow-xl rounded-2xl">
//           {/* Car Image */}
//           {/* <figure className="lg:w-1/2">
//           <img
//             src={thumbnail}
//             alt={name}
//             className="w-full h-full object-cover rounded-l-2xl"
//           />
//         </figure> */}

//           {/* Car Details */}
//           <div className="card-body lg:w-1/2 space-y-4">
//             <h2 className="card-title text-3xl font-bold">{cars.name}</h2>

//             <p className="text-gray-700 text-lg">
//               <span className="font-semibold">Type/Model:</span> {cars.category}
//             </p>

//             <p className="text-gray-700 text-lg">
//               <span className="font-semibold">Rent per day:</span>{" "}
//               {cars.rentPrice}
//             </p>

//             <p className="text-gray-700 text-lg">
//               <span className="font-semibold">Provider:</span>{" "}
//               {cars.Provider_Name}
//             </p>

//             <div className="card-actions justify-end mt-6">
//               <Link to="/">
//                 <button className="btn btn-outline btn-primary">
//                   Back to Home
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedCars;

// ---------------------------------

import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";

const FeaturedCars = () => {
  const data = useLoaderData();
  const cars = data.result;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001737] to-[#1a1a2e] pt-[150px] px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:flex bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-gray-700"
        >
          {/* Car Image */}
          <div className="lg:w-1/2 relative">
            <motion.img
              src={cars.thumbnail || "https://via.placeholder.com/500x300"}
              alt={cars.name}
              className="w-full h-full object-cover lg:rounded-l-3xl"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Car Details */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-white mb-4"
              >
                {cars.name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-gray-300 text-lg mb-2"
              >
                <span className="font-semibold text-white"></span>{" "}
                {cars.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-gray-300 text-lg mb-2"
              >
                <span className="font-semibold text-white">Type/Model:</span>{" "}
                {cars.category}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-gray-300 text-lg mb-2"
              >
                <span className="font-semibold text-white">Rent per day:</span>{" "}
                ${cars.rentPrice}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-gray-300 text-lg mb-2"
              >
                <span className="font-semibold text-white">Provider:</span>{" "}
                {cars.Provider_Name}
              </motion.p>
            </div>

            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6"
            >
              <Link to="/">
                <button className="px-6 py-3 bg-[#7861CE] hover:bg-[#5e49b0] text-white rounded-full font-semibold shadow-lg transition-all duration-300">
                  Back to Home
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedCars;
