import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Ravi Mehta',
      title: 'Product Manager, XYZ Corp',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote:
        'Aaron is one of the most dedicated developers I’ve worked with. His ability to solve problems and deliver high-quality code on time is impressive.',
    },
    {
      name: 'Ayesha Khan',
      title: 'Senior Developer, CodeCraft',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote:
        'Working with Aaron was a breeze. His technical knowledge and communication skills helped streamline our development process.',
    },
    {
      name: 'Kunal Verma',
      title: 'Freelance Client',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      quote:
        'Aaron delivered our project ahead of schedule and exceeded expectations. Highly recommended for any web development work!',
    },
  ];

  return (
    <section className="bg-white text-gray-900 py-20 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-14 tracking-tight"
          data-aos="fade-up"
        >
          Testimonials
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <p className="text-gray-700 italic text-sm leading-relaxed mb-6">
                “{testimonial.quote}”
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
