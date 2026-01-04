// import React from "react";
// import { Link } from "react-router";
// import { motion } from "framer-motion";
// const Brows = ({ product }) => {
//   const { name, category, rentPrice, _id, status } = product;
//   return (
//     <div>
//       <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//         {/* <figure className="h-48 overflow-hidden">
//           <img
//             src=""
//             alt={name}
//             className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//           />
//         </figure> */}
//         <div className="card-body">
//           <h2 className="card-title">{name}</h2>
//           <div className="text-white bg-[#364d59] badge text-[18px] py-2 rounded-full my-2.5">
//             {category}
//           </div>
//           <p className="line-clamp-1">{rentPrice}</p>
//           <p>
//             {status === "unavailable" ? (
//               <span className="badge badge-error text-white">Unavailable</span>
//             ) : (
//               <span className="badge badge-success text-white">Available</span>
//             )}
//           </p>
//           {/* <p className="text-sm text-base-content/70">by {author}</p> */}
//           <div className="card-actions justify-between items-center mt-4">
//             <div className="flex gap-4 text-sm text-base-content/60">
//               {/* <span className="flex items-center gap-1">
//               <Eye className="w-4 h-4" />
//               {views}
//             </span> */}
//               {/* <span className="flex items-center gap-1">
//               <Heart className="w-4 h-4" />
//               {likes}
//             </span> */}
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-[30px] py-[10px] rounded-full bg-[#007bff] text-white w-full"
//             >
//               <Link to={`/car-details/${_id}`}>View Details</Link>
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Brows;

// ------------------------------
import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Brows = ({ product }) => {
  const { name, category, rentPrice, _id, status } = product;

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      {/* Optional Image section */}
      {/* <div className="h-48 w-full overflow-hidden rounded-t-2xl">
        <img
          src={product.image || "/placeholder.jpg"}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div> */}

      <div className="p-6 flex flex-col justify-between h-full space-y-4">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>

        {/* Category Badge */}
        <span className="inline-block px-4 py-1 text-sm font-medium bg-[#003366]/10 text-[#003366] rounded-full">
          {category}
        </span>

        {/* Price */}
        <p className="text-2xl font-bold text-[#003366]">
          ${rentPrice}{" "}
          <span className="text-sm text-gray-500 font-medium">/ day</span>
        </p>

        {/* Status Badge */}
        <div>
          {status === "unavailable" ? (
            <span className="inline-block px-3 py-1 text-sm font-medium bg-red-500 text-white rounded-full">
              Unavailable
            </span>
          ) : (
            <span className="inline-block px-3 py-1 text-sm font-medium bg-green-500 text-white rounded-full">
              Available
            </span>
          )}
        </div>

        {/* Action Button */}
        <Link to={`/car-details/${_id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 mt-4 rounded-full bg-[#003366] text-white font-semibold shadow-md hover:bg-[#005bb5] transition"
          >
            View Details
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Brows;
