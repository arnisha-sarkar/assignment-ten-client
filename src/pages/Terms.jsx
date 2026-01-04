import React from "react";
import MyContainer from "../components/MyContainer";

const Terms = () => {
  return (
    <MyContainer>
      <div className="mt-[150px] mb-[70px]">
        <h2 className="font-bold text-2xl mb-1.5">Introduction</h2>
        <p className="text-1xl">
          Welcome to DriveEase, your one-stop solution for hassle-free car
          rentals. Whether you’re planning a weekend getaway, a business trip,
          or just need a reliable ride around the city, we’ve got you covered.
          Browse our wide selection of vehicles, from compact cars to luxury
          SUVs, book your preferred ride in just a few clicks, and enjoy a
          seamless rental experience. At DriveEase, we prioritize convenience,
          affordability, and safety, ensuring your journey is smooth from start
          to finish.
        </p>
        <h2 className="font-bold text-2xl mt-4">Who We Are</h2>
        <p className="text-xl ">
          At DriveEase, we are passionate about making car rentals simple, fast,
          and reliable. Our team is dedicated to providing the best vehicles,
          transparent pricing, and exceptional customer service, so you can
          focus on your journey without any hassle. From city drives to long
          trips, we’re here to make every ride smooth and enjoyable.
        </p>
        <p className="mt-5">
          At DriveEase, your privacy is important to us. When you use our
          services, we may collect the following information to provide a smooth
          and secure car rental experience: Personal Details: Name, email, phone
          number, and billing information for booking and payment purposes.
          Driving Information: Driver’s license details and driving history to
          ensure safe rentals. Booking Preferences: Vehicle choices,
          pickup/drop-off locations, and rental dates. Usage Data: Website
          usage, cookies, and device information to improve our services. We use
          this information solely to provide, improve, and personalize our
          services, and we never share your
        </p>
      </div>
    </MyContainer>
  );
};

export default Terms;
