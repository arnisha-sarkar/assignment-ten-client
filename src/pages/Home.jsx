import React from "react";
import Banner from "../components/Banner";
import FeaturedCars from "../components/FeaturedCars";
import { useLoaderData } from "react-router";
import WhyRent from "../components/WhyRent";
import Testimonials from "../components/Testimonials";
// import Search from "../components/Search";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Banner />
      {/* <Search /> */}
      <FeaturedCars data={data} />
      <WhyRent />
      <Testimonials />
    </div>
  );
};

export default Home;
