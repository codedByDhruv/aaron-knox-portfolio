import React from 'react';
import profileImage from '../assets/images/profile/profile-image.png';

function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-12 px-6 py-16 bg-white text-gray-900">
      
      {/* Text Section */}
      <div className="text-center lg:text-left max-w-xl" data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          Hi, I'm <span className="text-amber-600">Aaron Knox</span>
        </h1>
        <h2 className="text-lg sm:text-xl text-slate-600 mb-6 uppercase tracking-wider font-medium">
          MERN Stack Developer
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8">
          I specialize in building responsive, full-stack web applications with clean architecture, modern UIs, and scalable backend systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#contact"
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-md"
          >
            Hire Me
          </a>
          <a
            href="/src/assets/pdf/Aaron_Knox_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-400 text-slate-800 hover:bg-slate-100 font-semibold py-2 px-6 rounded-full transition duration-300 shadow-md"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0" data-aos="zoom-in">
        <img
          src={profileImage}
          alt="Aaron Knox"
          className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-gray-300 shadow-xl object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
