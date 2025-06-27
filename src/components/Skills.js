import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Laravel",
  "Php",
  "Python",
  "Flutter",
  "Git",
  "GitHub",
  "Web Scraping",
  "Networking",
];

const Skills = () => (
  <section
    id="skills"
    className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4"
  >
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full font-semibold shadow"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
