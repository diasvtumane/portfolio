import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
