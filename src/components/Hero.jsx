import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gray-100"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Dias Burkitbayev</h1>
      <p className="text-xl text-gray-600 mb-6">
        Software Engineer | Innovator | Problem Solver
      </p>
      <a
        href="#about"
        className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Learn More
      </a>
    </section>
  );
};

export default Hero;
