import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router";

const Profile = () => {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const navigate = useNavigate();
  const { name, email } = formData;
  const logOut = () => {
    auth.signOut();
    navigate("/sign-in");
  };
  return (
    <>
      <section className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <h1 className="text-center mt-6 text-3xl font-bold">My Profile</h1>
        <h1 className="text-2xl mt-6">
          Hi Welcome{" "}
          <span className="text-red-500 font-semibold ">
            {auth.currentUser.displayName}
          </span>
        </h1>
        <div className="w-full md:w-[50%] px-6 mt-6">
          <form>
            {/* Name Input  */}
            <input
              className="mb-6 w-full text-gray-500 bg-white border-gray-400 rounded-md h-12"
              type="text"
              id="name"
              value={name}
              disabled
            />
            {/* Email Input */}
            <input
              className="mb-6 w-full text-gray-500 bg-white border-gray-400 rounded-md h-12"
              type="email"
              id="email"
              value={email}
              disabled
            />
            <div className="flex justify-between items-center">
              <p>
                Do You Want to Change Your Email ?
                <span className="text-red-500 hover:underline cursor-pointer hover:font-medium transition ease-in-out duration-200">
                  Edit
                </span>
              </p>
              <p
                onClick={logOut}
                className="text-blue-500 hover:underline cursor-pointer hover:font-medium transition ease-in-out duration-200"
              >
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
