import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <section>
        <h1 className="text-3xl text-center font-bold my-6 uppercase">
          Forgot Password
        </h1>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center mb-12 md:mb-6 p-6 md:p-0">
          <div className="w-full md:w-[60%] lg:w-[50%]">
            <img
              className="rounded-xl h-[400px] object-cover"
              src="https://images.unsplash.com/photo-1562770584-eaf50b017307?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtleXxlbnwwfHwwfHx8MA%3D%3D"
              alt="key"
            />
          </div>
          <div className="w-full md:w-[60%] lg:w-[40%] lg:ml-5 mt-6">
            <form className="space-y-6">
              <input
                type="email"
                className="w-full h-10 outline-none pl-2 rounded-md"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="Enter Your Email:"
              />
            </form>
            <div className="flex justify-between my-2">
              <p>
                Create an Account?{" "}
                <Link to="/sign-up" className="text-red-500 hover:underline">
                  Sign Up
                </Link>
              </p>
              <Link to="/sign-in" className="text-blue-500 hover:underline">
                Sign In instead
              </Link>
            </div>
            <button className="w-full my-2 bg-blue-500 py-3 rounded-md text-white hover:bg-blue-600 shadow-md hover:shadow-lg active:bg-gray-700 uppercase font-semibold">
              Send Reset Password
            </button>
            <div className="flex gap-1 items-center before:border-t-gray-500 before:border-t before:flex-1 after:border-t after:flex-1 after:border-t-gray-500">
              <p className="text-center">OR</p>
            </div>
            <OAuth />
          </div>
        </div>
      </section>
    </>
  );
};

export default Forgotpassword;
