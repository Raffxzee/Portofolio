import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-8 bg-black text-gray-200 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4 text-orange-300 uppercase tracking-widest">
          Reach Me At
        </h2>
        <p className="text-lg mb-2">
          Email:{" "}
          <a
            href="mailto:zraffka@gmail.com"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            zraffka@gmail.com
          </a>
        </p>
        <p className="text-lg">
          My Socmed:{" "}
          <a
            href="https://linkedin.com/in/RafkaSatriaWiguna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            href="https://twitter.com/Raffxze"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Twitter
          </a>
        </p>
        {/* You can add more social media links or other contact info here */}
      </div>
    </section>
  );
};

export default Contact;
