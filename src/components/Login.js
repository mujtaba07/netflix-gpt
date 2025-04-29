import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignUpForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="object-cover relative bg-opacity-5 inset-0 bg-black/500 h-[100vh] w-[100vw]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg"
          alt="logo"
        />
      </div>
      <form
        action=""
        className="position absolute bg-opacity-5 w-3/12 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-black/70 p-8 rounded-md"
      >
        <h1 className="text-white font-bold text-3xl mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && <div>
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full  bg-black/70 text-white"
          />
        </div>}
        <div>
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full  bg-black/70 text-white"
          />
        </div>
       
          <div>
            <input
              type="password"
              placeholder="Password"
              className="p-4 my-4  w-full bg-black/70 text-white"
            />
          </div>
        
        <div className="text-white my-2">Forgot Password?</div>
        <button className="text-white rounded-md align-center w-[100%] max-w-[100%] my-5 font-semibold p-4 text-center flex justify-center bg-red-500">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 text-white hover:underline cursor-pointer"
          onClick={toggleSignUpForm}
        >
          {isSignIn
            ? "New to Netflix ?  Sign Up Now"
            : "Already Registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
