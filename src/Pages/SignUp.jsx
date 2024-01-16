import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { db } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { name, email, password } = formData;
  const onChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      navigate("/");
      toast.success("Sign In Was Successfully");
    } catch (error) {
      console.log(error.message);
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        toast.error("You've Skipped All fields");
      }
      if (error.message === "Firebase: Error (auth/missing-email).") {
        toast.error("You have missed Email Field");
      }
      if (error.message === "Firebase: Error (auth/missing-password).") {
        toast.error("You have missed Password Field");
      }
      if (
        error.message ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      ) {
        toast.error("Password should be at least 6 characters");
      }
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Email Already In use");
      }
    }
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
          <div className="w-full md:w-[60%] lg:w-[40%] lg:ml-5 mt-4">
            <form className="space-y-4" onSubmit={onSubmit}>
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
              <button
                type="submit"
                className="w-full my-1 bg-blue-500 py-3 rounded-md text-white hover:bg-blue-600 shadow-md hover:shadow-lg active:bg-gray-700 uppercase font-semibold"
              >
                Sign Up
              </button>
              <div className="flex gap-1 items-center before:border-t-gray-500 before:border-t before:flex-1 after:border-t after:flex-1 after:border-t-gray-500">
                <p className="text-center">OR</p>
              </div>
              <OAuth />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
