import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="w-full bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white overflow-auto">
      <Navbar />
      <div className="w-full flex flex-col grow">{children}</div>
    </div>
  );
}
