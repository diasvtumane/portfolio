import React, { useState } from "react";
import TicTacToe from "./TicTacToe"; // Import the Tic Tac Toe component

const Projects = () => {
  const [showGame, setShowGame] = useState(false); // State to toggle the game display

  const projects = [
    {
      title: "Resume Builder (private)",
      description: "A web app for creating professional resumes.",
    },
    {
      title: "Lost Rooms of Purdue",
      description: "A Unity-based virtual reality game.",
      link: "https://github.com/JacsonPadgett/cs460-project",
    },
    {
      title: "Legal AI (private)",
      description: "AI tool to help with legal work",
    },
    {
      title: "Movie Recommendation Telegram Bot",
      description: "ML trained bot to give you movie suggestions",
      link: "https://github.com/diasvtumane/movie_recommendation",
    },
    {
      title: "Portfolio",
      description: "My portfolio website",
      link: "https://github.com/diasvtumane/portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 py-16"
    >
      <h2 className="text-4xl font-bold mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
          >
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-700"
              >
                <h3 className="text-2xl font-bold mb-2 hover:underline">
                  {project.title}
                </h3>
              </a>
            ) : (
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            )}
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}

        {/* Added Tic Tac Toe as an interactive project */}
        <div
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
        >
          <h3
            className="text-2xl font-bold mb-2 cursor-pointer hover:underline"
            onClick={() => setShowGame(!showGame)}
          >
            Tic Tac Toe
          </h3>
          <p className="text-gray-600 mb-4">
            An interactive Tic Tac Toe game built with React.
          </p>
          {showGame && (
            <div className="mt-4">
              <TicTacToe />
            </div>
          )}
          <button
            onClick={() => setShowGame(!showGame)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {showGame ? "Close Game" : "Play Game"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
