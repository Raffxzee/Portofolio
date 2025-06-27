import React from "react";

const Footer = () => (
  <footer className="py-6 bg-gray-200 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300">
    <div className="mb-2">
      &copy; {new Date().getFullYear()} Rafka Satria Wiguna. All rights
      reserved.
    </div>
    <div className="flex justify-center gap-4">
      <a
        href="https://www.linkedin.com/in/RafkaSatriaWiguna"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/Raffxzee"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        GitHub
      </a>
    </div>
  </footer>
);

export default Footer;
