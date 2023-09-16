import React from "react";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full overflow-auto flex flex-col">
      <nav className="flex justify-between p-3 shadow-md">
        <h1 className="flex items-center">Simple Header</h1>
        <div className="flex space-x-3 mx-2">
          <a href="">
            <button
              href="#"
              className="p-1 bg-[#0d6efd] rounded px-1 py-2 text-white font-bold"
            >
              Home
            </button>
          </a>
          <button
            href="#"
            className="text-[#0d6efd]  hover:bg-[#0d6efd] hover:text-white rounded px-1 py-2 font-bold"
          >
            Features
          </button>
          <button
            href="#"
            className="text-[#0d6efd]  hover:bg-[#0d6efd] hover:text-white rounded px-1 py-2 font-bold"
          >
            Pricing
          </button>
          <button
            href="#"
            className="text-[#0d6efd]  hover:bg-[#0d6efd] hover:text-white rounded px-1 py-2 font-bold"
          >
            FAQs
          </button>
          <button
            href="#"
            className="text-[#0d6efd]  hover:bg-[#0d6efd] hover:text-white rounded px-1 py-2 font-bold"
          >
            About
          </button>
        </div>
      </nav>

      <div className="w-full h-full px-1 flex flex-col">{children}</div>
    </div>
  );
}
