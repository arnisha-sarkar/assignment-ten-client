import React from "react";
import Banner from "../components/Banner";
import FeaturedCars from "../components/FeaturedCars";
import { useLoaderData } from "react-router";
// import Search from "../components/Search";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Banner />
      {/* <Search /> */}
      <FeaturedCars data={data} />
    </div>
  );
};

export default Home;
