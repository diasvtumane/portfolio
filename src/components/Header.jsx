import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl text-white">Dias Burkitbayev</h1>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl md:hidden focus:outline-none"
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            menuOpen ? "block bg-black bg-opacity-80" : "hidden"
          } absolute top-16 left-0 w-full md:static md:flex md:gap-6`}
        >
          <a
            href="#about"
            className="block py-2 px-4 text-lg font-medium text-white hover:text-gray-300 transition md:inline-block"
          >
            About Me
          </a>
          <a
            href="#resume"
            className="block py-2 px-4 text-lg font-medium text-white hover:text-gray-300 transition md:inline-block"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="block py-2 px-4 text-lg font-medium text-white hover:text-gray-300 transition md:inline-block"
          >
            My Projects
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 text-lg font-medium text-white hover:text-gray-300 transition md:inline-block"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
