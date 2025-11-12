import React from "react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import MyContainer from "./MyContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image1 from "../assets/img1.avif";
import image2 from "../assets/img2.avif";
import image3 from "../assets/img3.avif";
import image4 from "../assets/img4.avif";
const Slider = () => {
  return (
    <div>
      <div className="carousel w-full mb-8">
        <div id="slide1" className="carousel-item relative w-full h-[800px]">
          <img src={image1} className="w-full h-full object-cover " />

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-4xl font-bold mb-3">Luxury Rides</h2>
            <p className="text-lg mb-5 w-[60%] border border-red-400">
              Discover the joy of premium travel with our luxury car collection.
              From sleek designs to smooth performance, every detail is crafted
              for elegance and comfort. Whether it’s a business trip or a
              special occasion, drive with pride and feel the difference.
            </p>
            <button className="btn btn-primary">Explore Now</button>
          </div>

          {/* Arrows */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full h-[800px]">
          <img src={image2} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 ">
            <h2 className="text-4xl font-bold mb-3">Eco-Friendly Cars</h2>
            <p className="text-lg mb-5 w-[60%]">
              Take a step towards a greener future with our modern hybrid and
              electric vehicles. Save fuel, reduce emissions, and enjoy a quiet,
              smooth ride without compromising on power or style. Drive
              responsibly and help make our planet cleaner with every journey.
            </p>
            <button className="btn btn-success">Book Now</button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full h-[800px]">
          <img src={image3} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 ">
            <h2 className="text-4xl font-bold mb-3">Eco-Friendly Cars</h2>
            <p className="text-lg mb-5 w-[60%]">
              Take a step towards a greener future with our modern hybrid and
              electric vehicles. Save fuel, reduce emissions, and enjoy a quiet,
              smooth ride without compromising on power or style. Drive
              responsibly and help make our planet cleaner with every journey.
            </p>
            <button className="btn btn-warning">Discover More</button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full h-[800px]">
          <img src={image4} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 ">
            <h2 className="text-4xl font-bold mb-3">
              Perfect for Family Adventures
            </h2>
            <p className="text-lg mb-5 w-[60%]">
              Make every trip memorable with our spacious and comfortable family
              cars. Designed for safety and long drives, these cars ensure a
              relaxing experience for every passenger. Explore new destinations
              together and create memories that last a lifetime.
            </p>
            <button className="btn btn-info">Check Now</button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
