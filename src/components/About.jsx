import React from 'react';

function About() {
  return (
    <section
      className="bg-white text-gray-900 px-6 py-20"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-12 tracking-tight"
          data-aos="fade-up"
        >
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left: Description */}
          <div className="flex-1 space-y-6" data-aos="fade-up" data-aos-delay="100">
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              I'm a passionate <span className="text-amber-600 font-semibold">MERN Stack Developer</span> who loves building
              efficient and scalable web applications. I focus on writing clean code and creating smooth user experiences
              that solve real-world problems.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              I aim to grow continuously as a developer by embracing new technologies, building innovative products, and
              contributing to impactful digital solutions.
            </p>
          </div>

          {/* Right: Highlights */}
          <div className="flex-1" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Highlights</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Developed and deployed multiple full-stack applications</li>
              <li>Strong command of React, Node.js, Express, and MongoDB</li>
              <li>Worked in agile teams and led collaborative sprint planning</li>
              <li>Committed to clean, maintainable, and scalable code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
