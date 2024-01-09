import React from "react";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 bg-white border-b z-10 shadow-md">
      <header className="max-w-6xl  mx-auto flex justify-between items-center">
        <div>
          <img
            className="h-5"
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt=""
          />
        </div>
        <div>
          <ul className="flex space-x-2">
            <li
              className={`text-lg  font-semibold tracking-wide cursor-pointer py-4 border-b-[4px] px-4 duration-100 ${
                location.pathname === "/" || location.pathname === "/home"
                  ? "text-black border-b-red-500"
                  : "text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`text-lg  font-semibold tracking-wide cursor-pointer py-4 border-b-[4px] px-4 duration-100 ${
                location.pathname === "/offers"
                  ? "text-black border-b-red-500"
                  : "text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`text-lg  font-semibold tracking-wide cursor-pointer py-4 border-b-[4px] px-4 duration-100  ${
                location.pathname === "/sign-in"
                  ? "text-black border-b-red-500"
                  : "text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
