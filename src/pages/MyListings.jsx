import { useLoaderData } from "react-router";
import ListingsCard from "../components/ListingsCard";
import MyContainer from "../components/MyContainer";
import { motion } from "framer-motion";
const MyListings = () => {
  // const { products, loading } = useProducts();
  // console.log(products);
  const data = useLoaderData();
  console.log(data);
  return (
    <MyContainer>
      <div>
        <div className="flex flex-col justify-center items-center mt-30">
          <motion.h2
            initial={{ opacity: 0, y: -50 }} // invisible & top
            animate={{ opacity: 1, y: 0 }} // fade in & move down
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-[32px] text-[#364d59] font-bold"
          >
            Our Featured Cars
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }} // invisible & bottom
            animate={{ opacity: 1, y: 0 }} // fade in & move up
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // delay for stagger
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-[50%] text-center mt-4 text-[#888888]"
          >
            Discover our handpicked selection of top-quality cars, perfect for
            any occasion. From stylish sedans to powerful SUVs, these featured
            cars offer comfort, performance, and reliability for your next
            journey. Explore the best options available and find your ideal ride
            today!
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:mt-15 mb-15">
        {/* {products.map((product) => (
        <ListingsCard key={product._id} product={product} />
      ))} */}
        {data.map((car) => (
          <ListingsCard key={car._id} car={car} />
        ))}
      </div>
    </MyContainer>
  );
};

export default MyListings;
