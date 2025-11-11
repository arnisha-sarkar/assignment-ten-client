import React from "react";
import useProducts from "../hooks/useProducts";
import Brows from "../components/Brows";

const BrowsCars = () => {
  const { products, loading } = useProducts();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {products.map((product) => (
        <Brows key={product._id} product={product} />
      ))}
    </div>
  );
};

export default BrowsCars;
