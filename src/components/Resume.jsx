import React from 'react';

function Resume() {
  const experience = [
    {
      role: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2023 – Present',
      responsibilities: [
        'Built and maintained scalable web applications using React and Node.js.',
        'Implemented RESTful APIs and integrated third-party services.',
        'Worked closely with designers and product managers in agile sprints.',
      ],
    },
    {
      role: 'Frontend Developer Intern',
      company: 'Creative Web Studio',
      duration: 'Jul 2022 – Dec 2022',
      responsibilities: [
        'Developed responsive UI components using React and Tailwind CSS.',
        'Optimized website performance and improved SEO scores.',
        'Collaborated with senior developers to learn best practices.',
      ],
    },
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'XYZ University',
      duration: '2019 – 2023',
    },
  ];

  const certifications = [
    'MongoDB Developer Certification – MongoDB University',
    'Responsive Web Design – freeCodeCamp',
  ];

  return (
    <section className="bg-white text-gray-900 py-20 px-6" id="resume">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14 tracking-tight" data-aos="fade-up">
          Resume
        </h2>

        {/* Experience Section */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Experience</h3>
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border-l-4 border-amber-500 rounded-xl p-6 mb-6 shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={150 + index * 100}
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3">
                <h4 className="text-lg font-semibold text-gray-900">
                  {job.role}{' '}
                  <span className="text-gray-500 font-medium">– {job.company}</span>
                </h4>
                <span className="text-sm text-gray-500">{job.duration}</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 pl-1">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border-l-4 border-sky-500 rounded-xl p-6 shadow hover:shadow-md transition mb-4"
              data-aos="fade-up"
              data-aos-delay={250 + index * 100}
            >
              <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
              <p className="text-sm text-gray-600 mt-1">
                {edu.institution} &middot; {edu.duration}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        {certifications.length > 0 && (
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Certifications & Awards
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-sm text-gray-800 hover:shadow-md hover:scale-[1.01] transition"
                  data-aos="fade-up"
                  data-aos-delay={350 + index * 100}
                >
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default Resume;
