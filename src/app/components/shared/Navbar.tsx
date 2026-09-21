import Image from "next/image";
import React from "react";
import logo from "@/assets/book.ico";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" bg-base-100 border-b border-base-200 shadow-sm px-4 md:px-8 lg:px-12">
      <nav className="container mx-auto navbar">
        {/* Left side */}
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-10 mt-3 w-56 p-3 shadow-lg border border-base-200"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/books">Books</Link>
              </li>
              <li>
                <Link href="/listedBooks">Listed Books</Link>
              </li>
              <li>
                <Link href="/readBooks">Read Books</Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2 ml-2">
            <Image
              src={logo}
              alt="Book Vibe logo"
              width={38}
              height={38}
              className="rounded-lg"
            />

            <span className="text-xl font-bold tracking-tight">
              Book<span className="text-primary">Vibe</span>
            </span>
          </div>
        </div>

        {/* Desktop navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1">
            <li>
              <Link href="/" className="font-medium">
                Home
              </Link>
            </li>

            <li>
              <Link href="/books" className="font-medium">
                Books
              </Link>
            </li>

            <li>
              <Link href="/listedBooks" className="font-medium">Listed Books</Link>
            </li>

            <li>
              <Link href="/readBooks"  className="font-medium">Read Books</Link>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="navbar-end gap-2">
          <button className="btn btn-ghost hidden sm:flex">Sign In</button>

          <button className="btn btn-primary rounded-xl px-5">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
