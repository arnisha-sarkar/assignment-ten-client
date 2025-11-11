import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
const CarDetails = () => {
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
    fetch("http://localhost:3000/booking", {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2>{category}</h2>
          <p>{description}</p>
          <h4>{rentPrice}</h4>
          <div className="card-actions justify-end">
            <button onClick={handleBooking} className="btn btn-primary">
              Book Now
            </button>
          </div>
          <h2>{location}</h2>
          <h3>{status}</h3>
          <h2>{Provider_Name}</h2>
          <h2>{Provider_Email}</h2>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
