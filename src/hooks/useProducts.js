import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios("https://car-site-fawn.vercel.app/cars")
      .then((data) => setProducts(data.data))
      .catch((err) => setLoading(err))
      .finally(() => setLoading(false));
  }, []);
  return { products, loading };
};
export default useProducts;
