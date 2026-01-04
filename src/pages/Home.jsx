import React from "react";
import Banner from "../components/Banner";
import FeaturedCars from "../components/FeaturedCars";
import { useLoaderData } from "react-router";
import WhyRent from "../components/WhyRent";
import TopRated from "../components/TopRated";
import ReviewSlider from "../components/ReviewSlider";
import AboutUs from "../components/AboutUs";
import OurMission from "../components/OurMission";
import Map from "../components/Map";

// import Search from "../components/Search";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <section id="home">
        <Banner />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      {/* <Search /> */}
      <FeaturedCars data={data} />
      <section id="rent">
        <WhyRent />
      </section>
      <TopRated />
      <OurMission />
      <ReviewSlider />
      <Map />
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;
