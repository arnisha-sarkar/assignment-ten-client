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
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${addcar3})`,
      }}
    >
      <div>
        <div className="flex flex-col justify-center items-center mt-30">
          <motion.h2
            initial={{ opacity: 0, y: -50 }} // invisible & top
            animate={{ opacity: 1, y: 0 }} // fade in & move down
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-[32px] text-[#fff] font-bold"
          >
            My Bookings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }} // invisible & bottom
            animate={{ opacity: 1, y: 0 }} // fade in & move up
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // delay for stagger
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-[50%] text-center mt-4 text-[#fff]"
          >
            Discover our handpicked selection of top-quality cars, perfect for
            any occasion. From stylish sedans to powerful SUVs, these featured
            cars offer comfort, performance, and reliability for your next
            journey. Explore the best options available and find your ideal ride
            today!
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-12">
          {bookings.map((car) => (
            <div key={car._id} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img src={car.thumbnail} alt={car.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#364d59] font-bold">
                  {car.name}
                </h2>
                <h2 className="text-[#888888] font-medium text-[20px]">
                  {car.category}
                </h2>
                <p className="text-[#888888] font-medium text-[20px]">
                  {car.description}
                </p>
                <h4 className="text-[#364d59] font-bold">
                  Rent: ${car.rentPrice}
                </h4>
                <h2 className="text-[#888888] font-medium text-[20px]">
                  Location: {car.location}
                </h2>
                <h3 className="text-[#888888] font-medium text-[20px]">
                  Status: {car.status}
                </h3>
                <h2 className="text-[#888888] font-medium text-[20px]">
                  Provider: {car.Provider_Name}
                </h2>
                <h2 className="text-[#888888] font-medium text-[20px]">
                  Email: {car.Provider_Email}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
