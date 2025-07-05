import React from 'react';
import ecommerceStore from '../assets/images/projects/e-commerce-store.jpg';
import chatApp from '../assets/images/projects/chat-app.png';

function Projects() {
  const projectList = [
    {
      title: 'E-Commerce Store',
      image: ecommerceStore,
      description:
        'A full-featured e-commerce website with user authentication, product filtering, and Stripe payments.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      demoLink: 'https://your-demo-link.com',
      codeLink: 'https://github.com/your-username/ecommerce-project',
      tags: ['Fullstack', 'E-Commerce'],
    },
    {
      title: 'Chat App',
      image: chatApp,
      description:
        'Real-time chat app using Socket.IO with private and group messaging functionality.',
      tech: ['React', 'Node.js', 'Socket.IO'],
      demoLink: 'https://your-demo-link.com',
      codeLink: 'https://github.com/your-username/chat-app',
      tags: ['Real-time', 'Fullstack'],
    },
  ];

  return (
    <section className="bg-white text-gray-900 py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-14 tracking-tight"
          data-aos="fade-up"
        >
          Projects
        </h2>

        <div className="space-y-12">
          {projectList.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden flex flex-col lg:flex-row"
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between lg:w-1/2">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Tech Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium py-2 px-5 rounded-full transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-400 hover:bg-gray-100 text-gray-800 text-sm font-medium py-2 px-5 rounded-full transition"
                  >
                    View Code
                  </a>
                </div>

                {/* Tags */}
                {project.tags?.length > 0 && (
                  <div className="mt-4 text-xs italic text-gray-500">
                    {project.tags.join(', ')}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
