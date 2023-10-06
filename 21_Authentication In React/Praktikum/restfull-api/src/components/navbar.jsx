import React from "react";
import { useTheme } from "../utils/states/contexts/theme";
import { useToken } from "../utils/states/contexts/token-context";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

import Swal from "../utils/swal";

export default function Navbar() {
  const { theme, changeTheme } = useTheme();
  const { token, changeToken } = useToken();

  function handleLogout() {
    changeToken();
    Swal.fire({
      title: "Success",
      text: "Logout Successfully",
      showCancelButton: false,
    });
  }

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

        {token === "" ? (
          <Link to="/login">
            <button className="text-[#0d6efd]  hover:bg-[#0d6efd] hover:text-white rounded px-2 py-1 font-bold">
              Login
            </button>
          </Link>
        ) : (
          <>
            <Link to="/createProduct">
              <button className="text-[#0d6efd]  hover:bg-[#0d6efd] hover:text-white rounded px-2 py-1 font-bold">
                Product
              </button>
            </Link>
            <button
              className="text-[#0d6efd]  hover:bg-[#0d6efd] hover:text-white rounded px-2 py-1 font-bold"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </>
        )}

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
