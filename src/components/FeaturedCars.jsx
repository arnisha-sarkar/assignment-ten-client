import React, { useState } from "react";
import FeatureCarsCard from "./FeatureCarsCard";

const FeaturedCars = ({ data }) => {
  console.log(data);
  const [cars, setCars] = useState(data);
  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    if (!search_text) {
      setCars(data); // খালি হলে সব দেখাবে
      return;
    }
    // console.log(search_text);
    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCars(data);
      });
  };
  return (
    <>
      <form
        onSubmit={handleSearch}
        className="flex justify-center gap-2 mt-10 mb-10"
      >
        <label className="input rounded-full ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn btn-secondary rounded-full">Search</button>
      </form>
      <div className="grid grid-cols-3 gap-3">
        {cars.map((car) => (
          <FeatureCarsCard key={car._id} car={car} />
        ))}
      </div>
    </>
  );
};

export default FeaturedCars;
