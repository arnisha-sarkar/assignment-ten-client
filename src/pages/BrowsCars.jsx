import React from "react";
import useProducts from "../hooks/useProducts";
import Brows from "../components/Brows";
import MyContainer from "../components/MyContainer";
import addcar3 from "../assets/addcar3.avif";
import { ClockLoader } from "react-spinners";
const BrowsCars = () => {
  const { products, loading } = useProducts();
  if (loading) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${addcar3})` }}
      >
        <ClockLoader color="#fff" size={90} />
      </div>
    );
  }
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${addcar3})`,
      }}
    >
      <MyContainer clasName="mt-30 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {products.map((product) => (
            <Brows key={product._id} product={product} />
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default BrowsCars;
