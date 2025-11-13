import React, { useContext, useState } from "react";
import MyContainer from "../components/MyContainer";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";
import img6 from "../assets/img6.jpg";
import {
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
const googleProvider = new GoogleAuthProvider();
const Registration = () => {
  const [show, setShow] = useState(false);
  const { createUserWithEmailAndPasswordFun, user, setUser, setLoading } =
    useContext(AuthContext);
  const handleRegistration = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log({ displayName, photoURL, email, password });

    // if (passwrod.length < 6) {
    //   return toast.success("password should be at least 6 digit");
    // }
    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regExp.test(password)) {
      toast.error(
        "Password needs an uppercase, a lowercase letter, and minimum 6 characters."
      );
      return;
    }
    // createUserWithEmailAndPassword(auth, email, password)
    createUserWithEmailAndPasswordFun(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName,
          photoURL,
        })
          .then((res) => {
            setLoading(false);
            console.log(res);
            toast.success("signup sucessful");
          })
          .catch((e) => {
            toast.error(e.message);
          });
      })
      .catch((e) => {
        console.log(e);
        console.log(e.code);
        if (e.code == "auth/email-already-in-use") {
          toast.error("user already exist in database");
        } else {
          toast.error(e.message);
        }
      });
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("login sucessful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${img6})`,
      }}
    >
      <div>
        <MyContainer>
          <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card bg-base-100 w-full max-w-sm md:max-w-md lg:max-w-lg shadow-2xl">
                <form onSubmit={handleRegistration}>
                  <div className="card-body w-[500px] h-[570px] bg-white">
                    <h1 className="pt-10 text-center text-[#364d59] font-medium text-3xl">
                      User Registration
                    </h1>
                    <fieldset className="fieldset w-[450px]  h-[600px]">
                      <label className="label">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="input input-bordered w-[450px] "
                        placeholder="enter your name"
                      />
                      <label className="label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="input input-bordered w-[450px]"
                        placeholder="Email"
                      />
                      <label className="label">Photo</label>
                      <input
                        type="text"
                        name="photo"
                        className="input input-bordered w-full"
                        placeholder="Your photo URL here"
                      />
                      <div className="relative">
                        <label className="label ">Password</label>
                        <input
                          type={show ? "text" : "password"}
                          name="password"
                          className="input input-bordered w-full"
                          placeholder="Password"
                        />

                        <span
                          onClick={() => setShow(!show)}
                          className="absolute right-[10px] top-[30px] cursor-pointer"
                        >
                          {show ? <FaEye /> : <IoEyeOff />}
                        </span>
                      </div>
                      {/* <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div> */}
                      {/* Google Signin */}
                      <button
                        onClick={handleGoogleLogin}
                        type="button"
                        className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer text-[18px]"
                      >
                        <img
                          src="https://www.svgrepo.com/show/475656/google-color.svg"
                          alt="google"
                          className="w-5 h-5"
                        />
                        Continue with Google
                      </button>
                      <button className="btn bg-[#007bff] text-white text-[18px] mt-4">
                        Registration
                      </button>
                    </fieldset>
                    <div className="text-center mt-3 ">
                      <p className="text-sm text-black text-[18px]">
                        Already have an account?{" "}
                        <Link
                          to="/login"
                          className="text-primary hover:text-#000[] font-medium underline text-[18px]"
                        >
                          Log in
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </MyContainer>
      </div>
    </div>
  );
};

export default Registration;
