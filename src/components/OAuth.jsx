import React from "react";
import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <button className="w-full my-2 bg-red-500 py-3 rounded-md text-white hover:bg-red-600 shadow-md hover:shadow-lg active:bg-gray-700 flex justify-center items-center uppercase font-semibold">
      <FcGoogle className="mr-2" />
      Sign In With Gmail
    </button>
  );
};

export default OAuth;
