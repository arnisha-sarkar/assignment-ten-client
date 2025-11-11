import React from "react";
import FeatureCarsCard from "./FeatureCarsCard";

const FeaturedCars = ({ data }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-3 gap-3">
      {data.map((cars) => (
        <FeatureCarsCard key={cars._id} cars={cars} />
      ))}
    </div>
  );
};

export default FeaturedCars;
