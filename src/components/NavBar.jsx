import React, { useContext } from "react";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { AuthContext } from "../context/AuthContext";
import { MdCarRental } from "react-icons/md";
// import { auth } from "../firebase/firebase.config";
// import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
import { Link } from "react-router";

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
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <MyContainer>
        <div className="navbar shadow-sm px-[100px]">
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
            {loading ? (
              <ClockLoader color="#fff" />
            ) : user ? (
              <div className="dropdown">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    src={user?.photoURL || "https://via.placeholder.com"}
                    className="h-15 w-15 rounded-full mx-auto cursor-pointer"
                    alt=""
                  />
                </div>
                <div
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-[100] w-56 max-h-60 p-3 shadow-lg border border-gray-300 overflow-y-auto"
                >
                  <h2>{user?.displayName}</h2>
                  <p className="my-3">{user?.email}</p>
                  <button
                    onClick={handleSignout}
                    className="outline px-3 py-2 text-[#2563EB] cursor-pointer"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <button className="outline px-12 py-4 text-[#2563EB]">
                <MyLink to={"/login"} className="text-[#F9FAFB] ">
                  Login
                </MyLink>
              </button>

              // <MyLink to={"/login"}>Login</MyLink>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default NavBar;

// import React, { useContext } from "react";
// import MyContainer from "./MyContainer";
// import MyLink from "./MyLink";
// import { AuthContext } from "../context/AuthContext";
// import { MdCarRental } from "react-icons/md";
// import { toast } from "react-toastify";
// import { ClockLoader } from "react-spinners";

// const NavBar = () => {
//   const { user, setUser, handleSignoutFun, loading, setLoading } =
//     useContext(AuthContext);

//   const handleSignout = () => {
//     handleSignoutFun();
//     setLoading(false)
//       .then(() => {
//         toast.success("Signout successful");
//         setUser(null);
//       })
//       .catch((e) => {
//         toast.error(e.message);
//       });
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
//       {/* Transparent Navbar */}
//       <div className="bg-transparent">
//         <MyContainer>
//           <div className="navbar">
//             {/* Navbar Start */}
//             <div className="navbar-start">
//               <div className="dropdown">
//                 <div tabIndex={0} className="btn btn-ghost lg:hidden">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h8m-8 6h16"
//                     />
//                   </svg>
//                 </div>
//                 <ul
//                   tabIndex="-1"
//                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
//                 >
//                   <li>
//                     <a>Item 1</a>
//                   </li>
//                   <li>
//                     <a>Parent</a>
//                     <ul className="p-2">
//                       <li>
//                         <a>Submenu 1</a>
//                       </li>
//                       <li>
//                         <a>Submenu 2</a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a>Item 3</a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MdCarRental className="text-white text-3xl" />
//                 <h1 className="text-white text-2xl font-semibold">
//                   Car Rental
//                 </h1>
//               </div>
//             </div>

//             {/* Navbar Center */}
//             <div className="navbar-center hidden lg:flex">
//               <ul className="menu menu-horizontal px-1">
//                 <li>
//                   <MyLink to={"/"}>Home</MyLink>
//                 </li>
//                 <li>
//                   <MyLink to={"/addCar"}>Add Car</MyLink>
//                 </li>
//                 <li>
//                   <MyLink to={"/listings"}>My Listings</MyLink>
//                 </li>
//                 <li>
//                   <MyLink to={"/brows"}>Browse Cars</MyLink>
//                 </li>
//                 <li>
//                   <MyLink to={"/booking"}>My Bookings</MyLink>
//                 </li>
//               </ul>
//             </div>

//             {/* Navbar End */}
//             <div className="navbar-end flex items-center gap-5">
//               {loading ? (
//                 <ClockLoader color="#fff" />
//               ) : user ? (
//                 <div className="dropdown">
//                   <div tabIndex={0} className="m-1">
//                     <img
//                       src={user?.photoURL || "https://via.placeholder.com"}
//                       className="h-12 w-12 rounded-full cursor-pointer"
//                       alt="User"
//                     />
//                   </div>
//                   <div
//                     tabIndex="-1"
//                     className="dropdown-content menu bg-base-100 rounded-box z-50 w-56 p-4 shadow"
//                   >
//                     <h2 className="font-semibold">{user?.displayName}</h2>
//                     <p className="text-sm mb-2">{user?.email}</p>
//                     <button
//                       onClick={handleSignout}
//                       className="btn btn-sm btn-error w-full"
//                     >
//                       Sign Out
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <MyLink
//                   to={"/login"}
//                   className="text-white btn btn-outline btn-sm"
//                 >
//                   Login
//                 </MyLink>
//               )}
//             </div>
//           </div>
//         </MyContainer>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
