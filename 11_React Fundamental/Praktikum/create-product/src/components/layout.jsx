import React from "react";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full overflow-auto flex flex-col">
      <nav className="flex justify-between p-3 shadow-md">
        <h1 className="flex items-center">Simple Header</h1>
        <div className="flex space-x-4 mx-5">
          <a href="">
            <button
              href="#"
              className="p-1 bg-[#0d6efd] rounded px-3 py-2 text-white"
            >
              Home
            </button>
          </a>
          <button
            href="#"
            className="text-black  hover:bg-[#0d6efd] hover:text-white rounded px-3 py-2"
          >
            Features
          </button>
          <button
            href="#"
            className="text-black  hover:bg-[#0d6efd] hover:text-white rounded px-3 py-2"
          >
            Pricing
          </button>
          <button
            href="#"
            className="text-black  hover:bg-[#0d6efd] hover:text-white rounded px-3 py-2"
          >
            FAQs
          </button>
          <button
            href="#"
            className="text-black  hover:bg-[#0d6efd] hover:text-white rounded px-3 py-2"
          >
            About
          </button>
        </div>
      </nav>

      <div className="w-full h-full px-3 flex flex-col">{children}</div>
    </div>
  );
}
