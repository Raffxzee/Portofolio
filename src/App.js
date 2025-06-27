import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-gray-900 min-h-screen' : 'bg-white min-h-screen'}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
