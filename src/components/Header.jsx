import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl text-white">Dias Burkitbayev</h1>
        <nav className="flex gap-6">
          <a
            href="#about"
            className="text-lg font-medium text-white hover:text-gray-300 transition"
          >
            About Me
          </a>
          <a
            href="#resume"
            className="text-lg font-medium text-white hover:text-gray-300 transition"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="text-lg font-medium text-white hover:text-gray-300 transition"
          >
            My Projects
          </a>
          <a
            href="#contact"
            className="text-lg font-medium text-white hover:text-gray-300 transition"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
