import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };    

  return (
    <header className="fixed w-full transition-all top-0 z-10 shadow-lg backdrop-filter backdrop-blur-lg border-b border-gray-200">
      <nav className="flex flex-wrap justify-center py-4 md:py-0 px-4 text-lg text-gray-700">
        <MenuIcon
          id="menu-button"
          onClick={handleToggle}
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        />
        <div className={`${isActive ? "hidden" : ""} w-full md:flex md:items-center md:w-auto`} id="menu">
            <ul className="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0">
                <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                    Features
                </a>
                </li>

                <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                    Pricing
                </a>
                </li>
                <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                    Customers
                </a>
                </li>
                <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                    Blog
                </a>
                </li>
                <li>
                <a
                    className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                    href="#"
                >
                    Sign Up
                </a>
                </li>
            </ul>
        </div>
      </nav>
    </header>
  );
}
