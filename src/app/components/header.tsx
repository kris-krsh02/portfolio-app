"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav
        className="mt-6 relative max-w-[85rem] w-full bg-purple border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex-none text-2xl font-accent font-outline-1 text-beige"
            aria-label="Brand"
          >
            KK
          </Link>
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              onClick={toggleNavbar}
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className={`${
                  isOpen ? "hidden" : "block"
                } flex-shrink-0 size-4`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <svg
                className={`${
                  isOpen ? "block" : "hidden"
                } flex-shrink-0 size-4`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className={`hs-collapse ${
            isOpen ? "block" : "hidden"
          } overflow-hidden transition-all duration-300 basis-full grow md:block`}
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7 font-accent ">
            <Link
              href="/"
              className="text-xl text-beige font-outline-1 md:py-6"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="/account"
              className="text-xl text-beige font-outline-1 md:py-6"
            >
              Projects
            </Link>
            <Link
              href="/work"
              className="text-xl text-beige font-outline-1 md:py-6"
            >
              Journey
            </Link>
            <Link
              href="/blog"
              className="text-xl text-beige font-outline-1 md:py-6"
            >
              About Me
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
