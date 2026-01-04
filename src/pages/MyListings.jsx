import { useLoaderData } from "react-router";
import ListingsCard from "../components/ListingsCard";
import MyContainer from "../components/MyContainer";
import { motion } from "framer-motion";
import addcar3 from "../assets/addcar3.avif";
import { ClockLoader } from "react-spinners";
import useProducts from "../hooks/useProducts";
const MyListings = () => {
  const data = useLoaderData();
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
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${addcar3})`,
        }}
      >
        <div>
          <div className="flex flex-col justify-center items-center mt-30">
            <motion.h2
              initial={{ opacity: 0, y: -50 }} // invisible & top
              animate={{ opacity: 1, y: 0 }} // fade in & move down
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-[32px] text-[#fff] font-bold"
            >
              My Listings
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }} // invisible & bottom
              animate={{ opacity: 1, y: 0 }} // fade in & move up
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // delay for stagger
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-[50%] text-center mt-4 text-[#fff]"
            >
              Discover our handpicked selection of top-quality cars, perfect for
              any occasion. From stylish sedans to powerful SUVs, these featured
              cars offer comfort, performance, and reliability for your next
              journey. Explore the best options available and find your ideal
              ride today!
            </motion.p>
          </div>
        </div>
        <MyContainer>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:mt-15 mb-15">
            {/* {products.map((product) => (
        <ListingsCard key={product._id} product={product} />
      ))} */}
            {data.map((car) => (
              <ListingsCard key={car._id} car={car} />
            ))}
          </div>
        </MyContainer>
      </div>
    </>
  );
};

export default MyListings;
