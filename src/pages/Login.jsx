import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import MyLink from "../components/MyLink";
const googleProvider = new GoogleAuthProvider();
const Login = () => {
  // const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const { signInWithEmailAndPasswordFun, user, setUser } =
    useContext(AuthContext);
  // console.log(user);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    // signInWithEmailAndPassword(auth, email, password)
    signInWithEmailAndPasswordFun(email, password)
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
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    // ref={emailRef}
                    className="input"
                    placeholder="Email"
                  />
                  <div className="relative">
                    <label className="label ">Password</label>
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      className="input input-bordered w-full bg-white/20 "
                      placeholder="Password"
                    />
                    <span
                      onClick={() => setShow(!show)}
                      className="absolute right-[10px] top-[30px] cursor-pointer"
                    >
                      {show ? <FaEye /> : <IoEyeOff />}
                    </span>
                  </div>
                  {/* Google Signin */}
                  <button
                    onClick={handleGoogleLogin}
                    type="button"
                    className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="google"
                      className="w-5 h-5"
                    />
                    Continue with Google
                  </button>

                  <div>
                    {/* <button
                      type="button"
                      // onClick={handleForgetPassword}
                      className="link link-hover"
                    >
                      Forgot password?
                    </button> */}
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p className="text-sm text-black">
                  Don’t have an account?{" "}
                  <Link
                    to="/registration"
                    className="text-primary hover:text-#000[] font-medium underline"
                  >
                    Registration
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
