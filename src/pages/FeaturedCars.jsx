import React from "react";
import { Link, useLoaderData } from "react-router";

const FeaturedCars = () => {
  const data = useLoaderData();
  const cars = data.result;
  console.log(cars);
  return (
    <div>
      <div className="max-w-4xl mx-auto my-10">
        <div className="card lg:card-side bg-base-100 shadow-xl rounded-2xl">
          {/* Car Image */}
          {/* <figure className="lg:w-1/2">
          <img
            src={thumbnail}
            alt={name}
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </figure> */}

          {/* Car Details */}
          <div className="card-body lg:w-1/2 space-y-4">
            <h2 className="card-title text-3xl font-bold">{cars.name}</h2>

            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Type/Model:</span> {cars.category}
            </p>

            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Rent per day:</span>{" "}
              {cars.rentPrice}
            </p>

            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Provider:</span>{" "}
              {cars.Provider_Name}
            </p>

            <div className="card-actions justify-end mt-6">
              <Link to="/">
                <button className="btn btn-outline btn-primary">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
