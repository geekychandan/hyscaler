
"use client";
import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'E-commerce Platform Redesign',
    description: 'Increased conversion rates by 35% through UX improvements.',
    image: '/placeholder.svg',
  },
  {
    title: 'AI-Powered Customer Service',
    description: 'Reduced response times by 60% with intelligent chatbots.',
    image: '/placeholder.svg',
  },
  {
    title: 'Cloud Migration for FinTech',
    description: 'Achieved 99.99% uptime and 40% cost reduction.',
    image: '/placeholder.svg',
  },
];

const CaseStudies = () => {
  return (
    <section className="py-16 px-8 bg-gray-900">
      <motion.h2
        className="text-4xl font-bold mb-12 text-teal-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Case Studies
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.title}
            className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-teal-400">{study.title}</h3>
              <p className="text-gray-300">{study.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;

