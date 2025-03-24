import React, { useState } from "react";
import Header from "./Header";
import { Netflix_bgIMG } from "../utils/Netflix";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const togglesigninform = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img src={Netflix_bgIMG} />
      </div>
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-xs text-white w-3/12 p-8 rounded-lg">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          type="text"
          placeholder="Full Name"
          className="p-3 my-2 bg-gray-700 text-white w-full rounded-md"
        />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 bg-gray-700 text-white w-full rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 bg-gray-700 text-white w-full rounded-md"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-6 cursor-pointer" onClick={togglesigninform}>
          {" "}
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
