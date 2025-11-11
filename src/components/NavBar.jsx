import React, { useContext } from "react";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { AuthContext } from "../context/AuthContext";
import { MdCarRental } from "react-icons/md";
// import { auth } from "../firebase/firebase.config";
// import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";

const NavBar = () => {
  const { user, setUser, handleSignoutFun, loading, setLoading } =
    useContext(AuthContext);
  console.log(loading);
  console.log(user);
  const handleSignout = () => {
    // signOut(auth)
    handleSignoutFun();
    setLoading(false)
      .then(() => {
        toast.success("signout sucessful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="bg-[#000]">
      <MyContainer>
        <div className="navbar shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <MdCarRental className="text-[#F9FAFB] text-3xl" />
              <h1 className="text-white text-2xl font-semibold">Car Rental</h1>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <MyLink to={"/"} className="">
                  Home
                </MyLink>
              </li>
              <li>
                <MyLink to={"/addCar"}>Add Car</MyLink>
              </li>
              <li>
                <MyLink to={"/listings"}>My Listings</MyLink>
              </li>
              <li>
                <MyLink to={"/brows"}>Browse Cars</MyLink>
              </li>
              <li>
                <MyLink to={"/booking"}>My Bookings</MyLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-5">
            {/* <MyLink to={"/registration"} className="text-[#111827]">
              Registration
            </MyLink> */}
            {/* <MyLink to={"/login"}>Login</MyLink> */}
            {loading ? (
              <ClockLoader color="#fff" />
            ) : user ? (
              <div className="dropdown  border border-red-400">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    src={user?.photoURL || "https://via.placeholder.com"}
                    className="h-15 w-15 rounded-full mx-auto cursor-pointer"
                    alt=""
                  />
                </div>
                <div
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-25 p-2 shadow-sm"
                >
                  <h2>{user?.displayName}</h2>
                  <p className="">{user?.email}</p>
                  <button onClick={handleSignout}>Sign Out</button>
                </div>
              </div>
            ) : (
              <MyLink to={"/login"}>Login</MyLink>
            )}
            {/* <MyLink to={"/login"}>Login</MyLink> */}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default NavBar;
