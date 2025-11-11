import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-booking?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBookings(data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {bookings.map((car) => (
          <div key={car._id} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={car.thumbnail} alt={car.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{car.name}</h2>
              <h2>{car.category}</h2>
              <p>{car.description}</p>
              <h4>Rent: ${car.rentPrice}</h4>
              <h2>Location: {car.location}</h2>
              <h3>Status: {car.status}</h3>
              <h2>Provider: {car.Provider_Name}</h2>
              <h2>Email: {car.Provider_Email}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
