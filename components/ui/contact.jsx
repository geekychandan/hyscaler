import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-teal-400">
          Get in Touch
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-navy-700 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-navy-700 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-navy-700 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400" required></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-400 text-navy-900 px-6 py-2 rounded-full hover:bg-teal-300 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
