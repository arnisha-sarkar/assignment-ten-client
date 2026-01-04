import React, { useContext, useEffect, useState } from "react";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { AuthContext } from "../context/AuthContext";
import { MdCarRental } from "react-icons/md";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import MenuItem from "./Menu/MenuItem";

const NavBar = () => {
  const { user, setUser, handleSignoutFun, loading, setLoading } =
    useContext(AuthContext);

  const [scrolled, setScrolled] = useState(false);

  // 🔹 Scroll detect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignout = () => {
    handleSignoutFun();
    setLoading(false)
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-[#001737] shadow-md py-4" : "bg-[#001737] py-6"}
      `}
    >
      <MyContainer>
        <div className="navbar px-[100px]">
          {/* LEFT */}
          <div className="navbar-start">
            <div
              className={`dropdown ${scrolled ? "text-white" : "text-black"}`}
            >
              <div tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    scrolled ? "text-white" : "text-black"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                <li>
                  <MyLink to="/">Home</MyLink>
                </li>
                {/* <li>
                  <MyLink to="/addCar">Add Car</MyLink>
                </li>
                <li>
                  <MyLink to="/listings">My Listings</MyLink>
                </li>
                <li>
                  <MyLink to="/brows">Browse Cars</MyLink>
                </li>
                <li>
                  <MyLink to="/booking">My Bookings</MyLink>
                </li> */}
                {user && (
                  <>
                    <MenuItem
                      // icon={MdCarRental}
                      label="Add Car"
                      address="/dashboard/addCar"
                    />
                    <MenuItem
                      // icon={MdCarRental}
                      label="My Listings"
                      address="/dashboard/listings"
                    />
                    <MenuItem
                      // icon={MdCarRental}
                      label="Browse Cars"
                      address="/dashboard/brows"
                    />
                    <MenuItem
                      icon={MdCarRental}
                      label="My Bookings"
                      address="/dashboard/booking"
                    />
                  </>
                )}
              </ul>
            </div>

            <div className="flex items-center gap-2">
              <Link to="/">
                <MdCarRental
                  className={`text-3xl ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                />
              </Link>
              <motion.h1
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`text-2xl font-semibold cursor-pointer ${
                  scrolled ? "text-white" : "text-white"
                }`}
              >
                <Link to="/">Car Rental</Link>
              </motion.h1>
            </div>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className={`flex gap-12 items-center`}>
              <li>
                <Link
                  smooth
                  to="/#home"
                  scroll={(el) => {
                    const yOffset = -100; // navbar height
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                  className={scrolled ? "text-white" : "text-white"}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  smooth
                  to="/#about"
                  scroll={(el) => {
                    const yOffset = -100; // navbar height
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                  className={scrolled ? "text-white" : "text-white"}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  smooth
                  to="/#rent"
                  scroll={(el) => {
                    const yOffset = -100; // navbar height
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                  className={scrolled ? "text-white" : "text-white"}
                >
                  Why Rent With Us
                </Link>
              </li>
              <MyLink to={"/contact"}>Contact</MyLink>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end flex items-center gap-5">
            {loading ? (
              <ClockLoader size={20} color={scrolled ? "#fff" : "#000"} />
            ) : user ? (
              <div className="dropdown dropdown-end">
                <img
                  tabIndex={0}
                  src={user?.photoURL || "https://via.placeholder.com"}
                  className="h-10 w-10 rounded-full cursor-pointer"
                  alt="user"
                />

                <div
                  tabIndex={0}
                  className="dropdown-content right-0 mt-3 menu bg-base-100 rounded-box w-56 p-3 shadow z-[999]"
                >
                  <h2 className="font-semibold">{user?.displayName}</h2>
                  <p className="my-2 text-sm">{user?.email}</p>

                  <Link
                    to="/dashboard"
                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  >
                    Dashboard
                  </Link>
                  <motion.button
                    onClick={handleSignout}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                    className="px-8 py-3 bg-[#003366] rounded-md cursor-pointer text-white"
                  >
                    Sign Out
                  </motion.button>
                  {/* <button
                    onClick={handleSignout}
                    className="mt-2 px-3 py-2 rounded bg-red-500 text-white hover:bg-red-600"
                  >
                    Sign Out
                  </button> */}
                </div>
              </div>
            ) : (
              <MyLink
                to="/login"
                className={`${scrolled ? "text-white" : "text-black"}`}
              >
                Login
              </MyLink>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default NavBar;
