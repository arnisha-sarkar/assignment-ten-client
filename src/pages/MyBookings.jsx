import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import addcar3 from "../assets/addcar3.avif";
import { ClockLoader } from "react-spinners";
const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(bookings);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://car-site-fawn.vercel.app/my-booking?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBookings(data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    }
  }, [user]);
  if (loading) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${addcar3})` }}
      >
        <ClockLoader color="#fff" size={100} />
      </div>
    );
  }
  return (
    // <div
    //   className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
    //   style={{
    //     backgroundImage: `url(${addcar3})`,
    //   }}
    // >
    //   <div>
    //     <div className="flex flex-col justify-center items-center mt-30">
    //       <motion.h2
    //         initial={{ opacity: 0, y: -50 }} // invisible & top
    //         animate={{ opacity: 1, y: 0 }} // fade in & move down
    //         transition={{ duration: 1, ease: "easeOut" }}
    //         whileHover={{ scale: 1.05, y: -5 }}
    //         transition={{ type: "spring", stiffness: 300 }}
    //         className="text-[32px] text-[#fff] font-bold"
    //       >
    //         My Bookings
    //       </motion.h2>
    //       <motion.p
    //         initial={{ opacity: 0, y: 50 }} // invisible & bottom
    //         animate={{ opacity: 1, y: 0 }} // fade in & move up
    //         transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // delay for stagger
    //         whileHover={{ scale: 1.05, y: -5 }}
    //         transition={{ type: "spring", stiffness: 300 }}
    //         className="w-[50%] text-center mt-4 text-[#fff]"
    //       >
    //         Discover our handpicked selection of top-quality cars, perfect for
    //         any occasion. From stylish sedans to powerful SUVs, these featured
    //         cars offer comfort, performance, and reliability for your next
    //         journey. Explore the best options available and find your ideal ride
    //         today!
    //       </motion.p>
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-12">
    //       {bookings.map((car) => (
    //         <div key={car._id} className="card bg-base-100 w-96 shadow-sm">
    //           <figure>
    //             <img src={car.thumbnail} alt={car.name} />
    //           </figure>
    //           <div className="card-body">
    //             <h2 className="card-title text-[#364d59] font-bold">
    //               {car.name}
    //             </h2>
    //             <h2 className="text-[#888888] font-medium text-[20px]">
    //               {car.category}
    //             </h2>
    //             <p className="text-[#888888] font-medium text-[20px]">
    //               {car.description}
    //             </p>
    //             <h4 className="text-[#364d59] font-bold">
    //               Rent: ${car.rentPrice}
    //             </h4>
    //             <h2 className="text-[#888888] font-medium text-[20px]">
    //               Location: {car.location}
    //             </h2>
    //             <h3 className="text-[#888888] font-medium text-[20px]">
    //               Status: {car.status}
    //             </h3>
    //             <h2 className="text-[#888888] font-medium text-[20px]">
    //               Provider: {car.Provider_Name}
    //             </h2>
    //             <h2 className="text-[#888888] font-medium text-[20px]">
    //               Email: {car.Provider_Email}
    //             </h2>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 py-20"
      style={{ backgroundImage: `url(${addcar3})` }}
    >
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
        >
          My Bookings
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-2xl text-center text-gray-200 text-lg"
        >
          Discover our handpicked selection of top-quality cars, perfect for any
          occasion. From stylish sedans to powerful SUVs, these featured cars
          offer comfort, performance, and reliability for your next journey.
        </motion.p>
      </div>

      {/* Bookings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookings.map((car) => (
          <motion.div
            key={car._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 15px 35px rgba(0,0,0,0.4)",
            }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={car.thumbnail || "https://via.placeholder.com/400x250"}
                alt={car.name}
                className="w-full h-56 object-cover lg:rounded-t-3xl"
              />
              <span className="absolute top-3 right-3 bg-[#003366] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {car.status}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-6 space-y-2">
              <h2 className="text-2xl font-bold text-white">{car.name}</h2>
              <p className="text-gray-300 font-medium">{car.category}</p>
              <p className="text-gray-300 text-sm line-clamp-2">
                {car.description}
              </p>
              <div className="flex justify-between text-gray-200 font-medium mt-2">
                <span>Rent: ${car.rentPrice}</span>
                <span>Provider: {car.Provider_Name}</span>
              </div>
              <div className="flex justify-between  gap-3.5 text-gray-300 text-sm mt-1">
                <span>Location: {car.location}</span>
                <span>Email: {car.Provider_Email}</span>
              </div>
              <div className="mt-3 flex justify-end gap-2">
                <button className="px-4 py-2 bg-[#003366] hover:bg-purple-700 text-white rounded-full text-sm font-semibold transition-all duration-300">
                  Details
                </button>
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-semibold transition-all duration-300">
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
