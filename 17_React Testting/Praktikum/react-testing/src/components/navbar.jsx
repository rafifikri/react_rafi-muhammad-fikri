import React from "react";
import { useTheme } from "../utils/states/contexts/theme";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { theme, changeTheme } = useTheme();

  return (
    <nav className="flex flex-wrap justify-between p-3 shadow-md">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold">Simple Header</h1>
      </div>
      <div className="flex flex-wrap space-x-3 mx-2">
        <Link to="/">
          <button
            href="#"
            className="p-1 bg-[#0d6efd] rounded px-2 py-1 text-white font-bold"
          >
            Home
          </button>
        </Link>
        <Link to="/createProduct">
          <button
            href="#"
            className="text-[#0d6efd]  hover:bg-[#0d6efd] hover:text-white rounded px-2 py-1 font-bold"
          >
            Product
          </button>
        </Link>
        <button
          href="#"
          className="text-[#0d6efd]  hover:bg-[#0d6efd] hover:text-white rounded px-2 py-1 font-bold"
        >
          Pricing
        </button>
        <button
          href="#"
          className="text-[#0d6efd]  hover:bg-[#0d6efd] hover:text-white rounded px-2 py-1 font-bold"
        >
          FAQs
        </button>
        <button
          href="#"
          className="text-[#0d6efd]  hover:bg-[#0d6efd] hover:text-white rounded px-2 py-1 font-bold"
        >
          About
        </button>
        <div className="ml-3">
          {theme === "light" ? (
            <FaMoon size={25} onClick={() => changeTheme()} />
          ) : (
            <FaSun size={25} onClick={() => changeTheme()} />
          )}
        </div>
      </div>
    </nav>
  );
}
