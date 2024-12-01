"use client";
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "HyScaler transformed our business with their innovative solutions.",
    author: "Jane Doe",
    company: "Tech Innovators Inc.",
  },
  {
    quote: "The team's expertise in AI and machine learning is unparalleled.",
    author: "John Smith",
    company: "Data Dynamics Ltd.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <motion.h2
        className="text-4xl font-bold mb-12 text-teal-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What Our Clients Say
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-8 rounded-lg text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <p className="text-lg italic mb-4 text-gray-300">"{testimonial.quote}"</p>
            <p className="font-bold text-teal-400">{testimonial.author}</p>
            <p className="text-gray-400">{testimonial.company}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

