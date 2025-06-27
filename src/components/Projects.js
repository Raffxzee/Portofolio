import React from "react";

const projects = [
  {
    title: "Library web",
    description: "Simple web project",
    github: "https://github.com/Raffxzee/perpustakaan_web",
  },
  {
    title: "Food App",
    description: "A mobile app built with Flutter showcasing Food App",
    github: "https://github.com/Raffxzee/Food_app",
  },
  {
    title: "Warehouse web",
    description: "A web-based system for managing warehouse",
    github: "https://github.com/Raffxzee/web-gudang-laravel",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4"
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col"
          >
            {/* Optional: Add image here */}
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              GitHub Repo
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
