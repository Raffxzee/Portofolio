import React, { useState } from "react";

// Import certificate images
import ITBootcamp from "../certificate/IT Bootcamp _Software Development_  Workshop _ 2.5 Hours _ Project _ 7 Hours _ Presentation _ 3 Hours (1).pdf";
import MTCNA from "../certificate/mtcna (2).pdf";
import PCAP from "../certificate/PCAP_ Programming Essentials in Python (1).pdf";
import Seminar from "../certificate/Seminar _Akselerasi Transformasi Digital Untuk Mendukung Ekonomi Kreatif_.pdf";
import Workshop from "../certificate/Workshop IT Bootcamp _Software Development_.pdf";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "IT Bootcamp",
      description: "IT Bootcamp Program",
      image: ITBootcamp,
      type: "pdf",
    },
    {
      id: 2,
      title: "MTCNA",
      description: "MikroTik Certificate",
      image: MTCNA,
      type: "pdf",
    },
    {
      id: 3,
      title: "PCAP",
      description: "PCAP Certificate",
      image: PCAP,
      type: "pdf",
    },
    {
      id: 4,
      title: "Seminar Certificate",
      description:
        "Seminar Akselerasi Transformasi Digital Untuk Mendukung Ekonomi Kreatif",
      image: Seminar,
      type: "pdf",
    },
    {
      id: 5,
      title: "Workshop",
      description: "Workshop IT Bootcamp Software Development",
      image: Workshop,
      type: "pdf",
    },
  ];

  const openCertificate = (cert) => {
    if (cert.type === "pdf") {
      window.open(cert.image, "_blank");
    } else {
      setSelectedCert(cert);
    }
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section
      id="certificates"
      className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openCertificate(cert)}
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2h6v4H7V6zm8 8H5v-2h10v2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {cert.description}
                </p>
                <div className="mt-4 text-center">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {cert.type.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for image certificates */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl max-h-full overflow-auto">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-semibold">{selectedCert.title}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
