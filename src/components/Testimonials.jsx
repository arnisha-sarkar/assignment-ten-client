import React from "react";
import MyContainer from "./MyContainer";
import customer1 from "../assets/customer1.jpg";
const Testimonials = () => {
  return (
    <div className="mb-10">
      <MyContainer>
        <h2 className="text-[#364d59] text-2xl font-bold">Testimonials</h2>
        <div className="mt-6">
          <div className="card  text-neutral-content  grid grid-cols-3 gap-6">
            <div className="card-body items-center text-center bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* <h2 className="card-title">Cookies!</h2> */}
              <p className="text-[#888888]">
                Renting a car with this service was so easy and hassle-free! The
                booking process was quick, and the car was in perfect condition.
                Highly recommended!
              </p>
              <div className="flex gap-5 w-full border border-red-400 mt-3">
                <img className="w-[30px] rounded-full" src={customer1} alt="" />
                <div>
                  <h4 className="text-[#364d59] font-medium">Rose</h4>
                  <h4 className="text-[#888888]">customer</h4>
                </div>
              </div>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-ghost">Deny</button>
              </div> */}
            </div>
            <div className="card-body items-center text-center bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* <h2 className="card-title">Cookies!</h2> */}
              <p className="text-[#888888]">
                Affordable rates and trustworthy providers made my trip
                stress-free. The support team was very responsive whenever I had
                questions
              </p>
              <div className="flex gap-5 w-full border border-red-400 mt-3">
                <img className="w-[30px] rounded-full" src={customer1} alt="" />
                <div>
                  <h4 className="text-[#364d59] font-medium">David Johnson</h4>
                  <h4 className="text-[#888888]">customer</h4>
                </div>
              </div>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-ghost">Deny</button>
              </div> */}
            </div>
            <div className="card-body items-center text-center bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* <h2 className="card-title">Cookies!</h2> */}
              <p className="text-[#888888]">
                I loved the variety of cars available and how smooth everything
                went. 24/7 support is a big plus. I’ll definitely rent here
                again!
              </p>
              <div className="flex gap-5 w-full border border-red-400 mt-3">
                <img className="w-[30px] rounded-full" src={customer1} alt="" />
                <div>
                  <h4 className="text-[#364d59] font-medium">Emily Chen</h4>
                  <h4 className="text-[#888888]">customer</h4>
                </div>
              </div>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-ghost">Deny</button>
              </div> */}
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Testimonials;
