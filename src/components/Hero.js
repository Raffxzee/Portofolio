import React from "react";
import profileImage from "../pp.jpg";

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-center px-4">
    <div className="mb-8">
      <img
        src={profileImage}
        alt="Muhammad Dasril Asdar"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-600 shadow-lg mx-auto"
      />
    </div>
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Rafka Satria Wiguna</h1>
    <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
      IT Intern Applicant
    </h2>
    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-2xl">
      Passionate about Web Development and Software Engineering
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href="#projects"
        className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        View My Work
      </a>
      <a
        href="#certificates"
        className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
      >
        View Certificates
      </a>
    </div>
  </section>
);

export default Hero;
