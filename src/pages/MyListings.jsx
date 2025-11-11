import { useLoaderData } from "react-router";
import ListingsCard from "../components/ListingsCard";

const MyListings = () => {
  // const { products, loading } = useProducts();
  // console.log(products);
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {/* {products.map((product) => (
        <ListingsCard key={product._id} product={product} />
      ))} */}
      {data.map((car) => (
        <ListingsCard key={car._id} car={car} />
      ))}
    </div>
  );
};

export default MyListings;
