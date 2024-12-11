import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Resume Builder",
      description: "A web app for creating professional resumes.",
    },
    {
      title: "Lost Rooms of Purdue",
      description: "A Unity-based virtual reality game.",
    },
    {
      title: "Legal AI",
      description: "AI tool to help with legal work",
    },
    {
      title: "Telegram Bots",
      description: "Few bots to help with everyday tasks",
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
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
