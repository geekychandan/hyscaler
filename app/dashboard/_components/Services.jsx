'use client'

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Digital Engineering',
    description: 'Leverage cutting-edge technologies to build innovative digital solutions.',
    icon: '🚀',
  },
  {
    title: 'Design Thinking',
    description: 'Create user-centric designs that solve real-world problems.',
    icon: '💡',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure for your business needs.',
    icon: '☁️',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Harness the power of AI to drive intelligent decision-making.',
    icon: '🤖',
  },
];

const Services = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <motion.h2
        className="text-4xl font-bold mb-12 text-teal-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-gray-700 p-8 rounded-lg text-left transition-transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-4 text-teal-400">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

