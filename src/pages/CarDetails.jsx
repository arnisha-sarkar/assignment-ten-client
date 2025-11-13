import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
import addcar3 from "../assets/addcar3.avif";
const CarDetails = () => {
  const navigate = useNavigate();
  const user = useContext(AuthContext);
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...car, booking_by: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        toast.success("successfuly booking");
        // navigate("/booking");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center mt-30 mb-20">
      <div className="card bg-base-100 w-[40%] shadow-sm">
        <figure>
          <img src={thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title text-[#364d59] text-3xl">{name}</h2>
            <h2 className="text-[#364d59] text-2xl font-medium">{category}</h2>
          </div>
          <div className="flex justify-between">
            <p className="text-[#364d59] text-2xl font-medium">{description}</p>
            <h4 className="text-[#364d59] text-2xl font-medium">{rentPrice}</h4>
          </div>
          {/* <div className="card-actions justify-end">
            <button onClick={handleBooking} className="btn btn-primary">
              Book Now
            </button>
          </div> */}
          <div className="flex justify-between my-4">
            <h2 className="text-[#364d59] text-2xl font-medium">{location}</h2>
            <h3 className="text-[#364d59] text-2xl font-medium">{status}</h3>
          </div>
          <div className="flex justify-between">
            <h2 className="text-[#364d59] text-2xl font-medium">
              {Provider_Name}
            </h2>
            <h2 className="text-[#364d59] text-2xl font-medium">
              {Provider_Email}
            </h2>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={handleBooking}
              className="btn btn-primary text-2xl w-full mt-6"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
