// import React from "react";
// import { Navigation, Autoplay, EffectFade } from "swiper/modules";
// import MyContainer from "./MyContainer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import image1 from "../assets/img1.avif";
// import image2 from "../assets/img2.avif";
// import image3 from "../assets/img3.avif";
// import image4 from "../assets/img4.avif";
// import { motion } from "framer-motion";
// const Slider = () => {
//   return (
//     <div>
//       <div className="carousel w-full mb-8">
//         <div id="slide1" className="carousel-item relative w-full h-[800px]">
//           <img src={image1} className="w-full h-full object-cover " />

//           <div className="absolute inset-0 bg-black/50 z-[1]"></div>

//           {/* Text Overlay */}
//           <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-3">
//             <motion.h2
//               initial={{ opacity: 0, y: -50 }} // invisible & top
//               animate={{ opacity: 1, y: 0 }} // fade in & move down
//               transition={{ duration: 1, ease: "easeOut" }}
//               whileHover={{ scale: 1.05, y: -5 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="text-5xl font-bold mb-4 text-red "
//             >
//               Luxury Rides
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 50 }} // invisible & bottom
//               animate={{ opacity: 1, y: 0 }} // fade in & move up
//               transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // delay for stagger
//               className="text-lg text-gray-700 max-w-xl"
//               className="text-lg mb-5 w-[60%] "
//               whileHover={{ scale: 1.05, y: -5 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               Discover the joy of premium travel with our luxury car collection.
//               From sleek designs to smooth performance, every detail is crafted
//               for elegance and comfort. Whether it’s a business trip or a
//               special occasion, drive with pride and feel the difference.
//             </motion.p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="btn bg-[#007bff] text-white"
//             >
//               Explore Now
//             </motion.button>
//           </div>

//           {/* Arrows */}
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-[4]">
//             <a href="#slide4" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide2" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         <div id="slide2" className="carousel-item relative w-full h-[800px]">
//           <img src={image2} className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-black/50 z-[1]"></div>
//           <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-[3]">
//             <h2 className="text-4xl font-bold mb-3">Eco-Friendly Cars</h2>
//             <p className="text-lg mb-5 w-[60%]">
//               Take a step towards a greener future with our modern hybrid and
//               electric vehicles. Save fuel, reduce emissions, and enjoy a quiet,
//               smooth ride without compromising on power or style. Drive
//               responsibly and help make our planet cleaner with every journey.
//             </p>
//             <button className="btn bg-[#007bff] text-white">Book Now</button>
//           </div>
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-[4]">
//             <a href="#slide1" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide3" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         <div id="slide3" className="carousel-item relative w-full h-[800px]">
//           <img src={image3} className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-black/50 z-[1]"></div>
//           <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-[3]">
//             <h2 className="text-4xl font-bold mb-3">Eco-Friendly Cars</h2>
//             <p className="text-lg mb-5 w-[60%]">
//               Take a step towards a greener future with our modern hybrid and
//               electric vehicles. Save fuel, reduce emissions, and enjoy a quiet,
//               smooth ride without compromising on power or style. Drive
//               responsibly and help make our planet cleaner with every journey.
//             </p>
//             <button className="btn bg-[#007bff] text-white">
//               Discover More
//             </button>
//           </div>
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-[4]">
//             <a href="#slide2" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide4" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         <div id="slide4" className="carousel-item relative w-full h-[800px]">
//           <img src={image4} className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-black/50 z-[1]"></div>
//           <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-[3]">
//             <h2 className="text-4xl font-bold mb-3">
//               Perfect for Family Adventures
//             </h2>
//             <p className="text-lg mb-5 w-[60%]">
//               Make every trip memorable with our spacious and comfortable family
//               cars. Designed for safety and long drives, these cars ensure a
//               relaxing experience for every passenger. Explore new destinations
//               together and create memories that last a lifetime.
//             </p>
//             <button className="btn bg-[#007bff] text-white">Check Now</button>
//           </div>
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between z-[4]">
//             <a href="#slide3" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide1" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;

// -----------------------------

import React, { useState } from "react";
import MyContainer from "./MyContainer";

// images
import sliderOne from "../assets/banner-1.avif";
import sliderTwo from "../assets/banner-2.jpg";
import sliderThree from "../assets/banner-3.avif";
import sliderFour from "../assets/banner-4.avif";
import { motion } from "framer-motion";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { HashLink as Link } from "react-router-hash-link";
// Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";

const HeroSlider = () => {
  const images = [sliderOne, sliderTwo, sliderThree, sliderFour];
  const [scrolled, setScrolled] = useState(false);
  return (
    <MyContainer>
      <div className="relative h-[600px] overflow-hidden rounded-xl mt-[130px]">
        {/* 🔹 Image Slider */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1200}
          className="h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt="hero"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔹 Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* 🔹 Fixed Text Content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-xl px-6 text-white">
            <motion.h1
              initial={{ opacity: 0, y: -50 }} // invisible & top
              animate={{ opacity: 1, y: 0 }} // fade in & move down
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Rent Your Dream Car
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }} // invisible & bottom
              animate={{ opacity: 1, y: 0 }} // fade in & move up
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // delay for stagger
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-lg mb-6"
            >
              Book premium cars at affordable prices. Easy booking, trusted
              service, and smooth rides.
            </motion.p>
            <Link
              smooth
              to="/#featured-cars"
              scroll={(el) => {
                const yOffset = -100; // navbar height
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
              className={scrolled ? "text-white" : "text-white"}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#003366] hover:bg-[#003366] transition rounded-md cursor-pointer"
              >
                Browse Cars
              </motion.button>
            </Link>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#003366] hover:bg-[#003366] transition rounded-md cursor-pointer"
            >
              Browse Cars
            </motion.button> */}
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default HeroSlider;
