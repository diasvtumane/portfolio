import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-6 py-16"
    >
      <h2 className="text-4xl font-bold mb-6">Let's Get in Touch</h2>
      <p className="text-lg text-gray-700 mb-8">
        Let's work together! Reach out via email, connect on LinkedIn, or chat on Telegram.
      </p>
      <div className="flex gap-4">
        <a
          href="mailto:d.burkitbayev01@gmail.com"
          className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/dias-burkitbayev-009b5b207/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://t.me/diasvtumane"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          Telegram
        </a>
      </div>
    </section>
  );
};

export default Contact;
