import React from "react";
import Banner from "../components/Banner";
import FeaturedCars from "../components/FeaturedCars";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner />
      <FeaturedCars data={data} />
    </div>
  );
};

export default Home;
