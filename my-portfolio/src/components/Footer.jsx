import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-center py-6 px-11 flex flex-col md:flex-row justify-between items-center">
      <p>© 2026 Sarim Ali. All rights reserved.</p>
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/sarimg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/sarimg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/sarimg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;





// display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     padding: 25px;