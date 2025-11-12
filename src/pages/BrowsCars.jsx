import React from "react";
import useProducts from "../hooks/useProducts";
import Brows from "../components/Brows";
import MyContainer from "../components/MyContainer";

const BrowsCars = () => {
  const { products, loading } = useProducts();

  return (
    <MyContainer clasName="mt-30">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {products.map((product) => (
          <Brows key={product._id} product={product} />
        ))}
      </div>
    </MyContainer>
  );
};

export default BrowsCars;
