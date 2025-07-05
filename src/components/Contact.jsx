import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16 tracking-tight">
          Let’s Connect
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Contact Info</h3>
              <p className="text-slate-600">
                Feel free to reach out via email or connect on social platforms.
              </p>
              <div className="mt-4 space-y-2 text-slate-800">
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  <a
                    href="mailto:aaron.knox.dev@gmail.com"
                    className="text-amber-600 hover:underline"
                  >
                    aaron.knox.dev@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-medium">Phone:</span>{' '}
                  <a
                    href="tel:+911234567890"
                    className="text-amber-600 hover:underline"
                  >
                    +91 12345 67890
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Follow Me</h3>
              <div className="flex gap-5 text-lg">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-amber-100 text-amber-600 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-slate-200 text-amber-600 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-amber-100 text-amber-500 transition"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-3 rounded-full border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-amber-600 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-3 rounded-full border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-amber-600 focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-amber-600 focus:outline-none transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-full transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
