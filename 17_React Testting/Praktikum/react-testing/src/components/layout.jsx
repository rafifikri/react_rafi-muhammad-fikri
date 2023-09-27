// import React from "react";
// import { Link } from "react-router-dom";

// export default function Layout({ children }) {
//   return (
//     <div className="w-full h-full overflow-auto flex flex-col">
//       <nav className="flex justify-between p-3 shadow-md">
//         <h1 className="flex items-center">Simple Header</h1>
//         <div className="flex space-x-3 mx-2">
//           <Link to="/">
//             <button
//               href="#"
//               className="p-1 bg-[#0d6efd] rounded px-1 py-2 text-white font-bold"
//             >
//               Home
//             </button>
//           </Link>
//           <Link to="/createProduct">
//             <button
//               href="#"
//               className="text-[#0d6efd]  hover:bg-[#0d6efd] hover:text-white rounded px-1 py-2 font-bold"
//             >
//               Product
//             </button>
//           </Link>
//           <button
//             href="#"
//             className="text-[#0d6efd]  hover:bg-[#0d6efd] hover:text-white rounded px-1 py-2 font-bold"
//           >
//             Pricing
//           </button>
//           <button
//             href="#"
//             className="text-[#0d6efd]  hover:bg-[#0d6efd] hover:text-white rounded px-1 py-2 font-bold"
//           >
//             FAQs
//           </button>
//           <button
//             href="#"
//             className="text-[#0d6efd]  hover:bg-[#0d6efd] hover:text-white rounded px-1 py-2 font-bold"
//           >
//             About
//           </button>
//         </div>
//       </nav>

//       <div className="w-full h-full px-1 flex flex-col">{children}</div>
//     </div>
//   );
// }

import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white overflow-auto">
      <Navbar />
      <div className="w-full grow py-4 px-8">{children}</div>
    </div>
  );
}
