import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-6">
        
        {/* Branding */}
        <div>
          <h4 className="text-lg font-semibold">
            © {new Date().getFullYear()} Aaron Knox
          </h4>
          <p className="text-sm text-gray-500 mt-1">All rights reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:bg-amber-700 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:bg-amber-700 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:bg-amber-700 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
