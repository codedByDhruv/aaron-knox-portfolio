import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaGitAlt, FaDocker
} from 'react-icons/fa';
import {
  SiMongodb, SiMysql, SiPostman, SiExpress
} from 'react-icons/si';

function Skills() {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'React', icon: <FaReact className="text-cyan-500" /> },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express', icon: <SiExpress className="text-gray-700" /> },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-emerald-500" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
      ],
    },
    {
      title: 'Dev Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14 tracking-tight">
          Skills & Tech Stack
        </h2>

        <div className="space-y-10">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                <h3 className="text-xl font-semibold text-gray-800">{group.title}</h3>
              </div>

              <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-200"
                  >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 text-2xl">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-700">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
