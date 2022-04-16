import { MenuIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position);
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const isNavbarAtStart = () => {
   if (scrollPosition >= 35) {
    return 'text-base !text-white backdrop-filter backdrop-blur-md transition-opacity delay-150 ease-in-out py-1 bg-gray-800 opacity-90 border-b border-gray-200'
   }
   else {
     return 'text-base text-gray-700 backdrop-filter backdrop-blur-lg'
   }
  };

  return (
    <header className={`fixed w-full transition-all top-0 z-10 ${isNavbarAtStart()}`}>
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
            <ul className="pt-4 md:flex md:justify-between md:pt-0">
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
