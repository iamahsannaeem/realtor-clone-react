import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { name, email, password } = formData;
  const onChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.id]: event.target.value }));
    console.log(event.target.value);
  };
  return (
    <>
      <section>
        <h1 className="text-3xl text-center font-bold my-6 uppercase">
          Sign Up
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
                type="text"
                className="w-full h-10 outline-none pl-2 rounded-md"
                id="name"
                value={name}
                onChange={onChange}
                placeholder="Enter Your Full Name:"
              />
              <input
                type="email"
                className="w-full h-10 outline-none pl-2 rounded-md"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="Enter Your Email:"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full h-10 outline-none pl-2 rounded-md"
                  id="password"
                  value={password}
                  onChange={onChange}
                  placeholder="Enter Password:"
                />
                {showPassword ? (
                  <FaEye
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaEyeSlash
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </form>
            <div className="flex justify-between my-2">
              <p>
                You have already account ?
                <Link
                  to="/sign-in"
                  className="ml-1 text-red-500 hover:underline"
                >
                  Sign In
                </Link>
              </p>
              <Link
                to="/forgot-password"
                className="text-blue-500 hover:underline"
              >
                Forgot Password
              </Link>
            </div>
            <button className="w-full my-2 bg-blue-500 py-3 rounded-md text-white hover:bg-blue-600 shadow-md hover:shadow-lg active:bg-gray-700 uppercase font-semibold">
              Sign Up
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

export default SignUp;
