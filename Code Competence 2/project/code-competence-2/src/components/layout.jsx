import React from "react";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full overflow-auto flex flex-col">
      <nav className="flex justify-between p-3 shadow-md">
        <h1 className="flex items-center text-2xl">
          <img
            src="src/assets/logo.jpg"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
          GreenLeaf
        </h1>
        <div className="flex space-x-3 mx-2">
          <button
            href="#"
            className="p-1 bg-[#198754] rounded px-1 py-2 text-white font-bold"
          >
            Home
          </button>

          <button
            href="#"
            className="text-[#198754]  hover:bg-[#198754] hover:text-white rounded px-1 py-2 font-bold"
          >
            Product
          </button>
          <button
            href="#"
            className="text-[#198754]  hover:bg-[#198754] hover:text-white rounded px-1 py-2 font-bold"
          >
            About
          </button>
          <button
            href="#"
            className="text-[#198754]  hover:bg-[#198754] hover:text-white rounded px-1 py-2 font-bold"
          >
            Contact
          </button>
        </div>
      </nav>

      <div className="w-full h-full px-1 flex flex-col">{children}</div>
    </div>
  );
}
