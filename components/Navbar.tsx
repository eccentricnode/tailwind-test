import { MenuIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(isActive);
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
    return '!text-white backdrop-filter backdrop-blur-md transition-opacity delay-150 ease-in-out py-1 bg-neutral-900 opacity-90'
   }
   else {
     return 'text-white opacity-50'
   }
  };

  return (
    <header className={`fixed w-full transition-all top-0 z-10 ${isNavbarAtStart()}`}>
      <nav className="flex flex-wrap justify-center py-4 md:py-0 px-4 text-lg text-white">
        <MenuIcon
          id="menu-button"
          onClick={handleToggle}
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        />
        <div className={`${isActive ? "hidden" : ""} w-full md:flex md:items-center md:w-auto`} id="menu">
            <ul className="text-inherit pt-4 md:flex md:justify-between md:pt-0">
                <li>
                  <Link href="/" scroll={false}>
                    <a className="text-inherit md:p-4 py-2 block hover:text-purple-400">
                        Home
                    </a>
                  </Link>
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
                <Link href="/blog" scroll={false}>
                    <a className="md:p-4 py-2 block hover:text-purple-400">
                        Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" scroll={false}>
                    <a className="md:p-4 py-2 block hover:text-purple-400 text-purple-500">
                        Sign Up
                    </a>
                  </Link>
                </li>
            </ul>
        </div>
      </nav>
    </header>
  );
}
