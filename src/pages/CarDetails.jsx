// import React, { useContext, useState } from "react";
// import { Link, useLoaderData, useNavigate } from "react-router";
// import { AuthContext } from "../context/AuthContext";
// import { toast } from "react-toastify";
// import { ClockLoader } from "react-spinners";
// import addcar3 from "../assets/addcar3.avif";
// const CarDetails = () => {
//   const navigate = useNavigate();
//   const user = useContext(AuthContext);
//   const data = useLoaderData();

//   const car = data.result;
//   const {
//     name,
//     description,
//     category,
//     thumbnail,
//     rentPrice,
//     location,
//     status,
//     Provider_Name,
//     Provider_Email,
//   } = car;

//   const handleBooking = () => {
//     fetch("https://car-site-fawn.vercel.app/booking", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ ...car, booking_by: user.email }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);

//         toast.success("successfuly booking");
//         // navigate("/booking");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="flex justify-center items-center mt-30 mb-20">
//       <div className="card bg-base-100 w-[40%] shadow-sm">
//         <figure>
//           <img src={thumbnail} alt="Shoes" />
//         </figure>
//         <div className="card-body">
//           <div className="flex justify-between">
//             <h2 className="card-title text-[#364d59] text-3xl">{name}</h2>
//             <h2 className="text-[#364d59] text-2xl font-medium">{category}</h2>
//           </div>
//           <div className="flex justify-between">
//             <p className="text-[#364d59] text-2xl font-medium">{description}</p>
//             <h4 className="text-[#364d59] text-2xl font-medium">{rentPrice}</h4>
//           </div>
//           {/* <div className="card-actions justify-end">
//             <button onClick={handleBooking} className="btn btn-primary">
//               Book Now
//             </button>
//           </div> */}
//           <div className="flex justify-between my-4">
//             <h2 className="text-[#364d59] text-2xl font-medium">{location}</h2>
//             <h3 className="text-[#364d59] text-2xl font-medium">{status}</h3>
//           </div>
//           <div className="flex justify-between">
//             <h2 className="text-[#364d59] text-2xl font-medium">
//               {Provider_Name}
//             </h2>
//             <h2 className="text-[#364d59] text-2xl font-medium">
//               {Provider_Email}
//             </h2>
//           </div>
//           <div className="card-actions justify-end">
//             <button
//               onClick={handleBooking}
//               className="btn btn-primary text-2xl w-full mt-6"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetails;
// -------------------------------

import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const CarDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const car = data.result;

  const {
    name,
    description,
    category,
    thumbnail,
    rentPrice,
    location,
    status,
    Provider_Name,
    Provider_Email,
  } = car;

  const handleBooking = () => {
    fetch("https://car-site-fawn.vercel.app/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...car, booking_by: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully booked!");
        navigate("/dashboard/my-bookings");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6 bg-gradient-to-b from-[#001737] to-[#1a1a2e]">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
        {/* Car Image */}
        <div className="lg:flex">
          <div className="lg:w-1/2 relative">
            <img
              src={thumbnail || "https://via.placeholder.com/400x300"}
              alt={name}
              className="w-full h-full object-cover lg:rounded-l-3xl transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Car Details */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold text-white mb-3">{name}</h2>
              <p className="text-gray-300 mb-3">{description}</p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold text-white">Type/Model:</span>{" "}
                {category}
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold text-white">Rent per day:</span>{" "}
                ${rentPrice}
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold text-white">Location:</span>{" "}
                {location}
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold text-white">Status:</span>{" "}
                {status}
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold text-white">Provider:</span>{" "}
                {Provider_Name}
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold text-white">Email:</span>{" "}
                {Provider_Email}
              </p>
            </div>

            {/* Booking Button */}
            <div className="mt-6">
              <button
                onClick={handleBooking}
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
