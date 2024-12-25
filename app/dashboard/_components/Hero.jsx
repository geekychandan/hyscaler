'use client'
import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Typed from "typed.js";
import ClientWrapper from "./ClientWrapper";
import heroImage from "./hero-image.webp";
import Image from "next/image";

const Hero = () => {
  const controls = useAnimation();
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["through Creative Problem Solving", "with Machine Learning-Powered Insights","through the Power of Artificial Intelligence","with Cutting-Edge Technology"],
      typeSpeed: 70, // Slower typing speed
      backSpeed: 70, // Slower backspacing speed
      loop: true,
      showCursor: true, // Hide the cursor
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  return (
    <ClientWrapper>
      <motion.section
        className="flex flex-col md:flex-row justify-between items-center min-h-screen px-8 py-16 bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Text Content */}
        <motion.div
          className="max-w-2xl mb-8 md:mb-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="text-5xl font-bold mb-4">
              Getting to the Future with
            </h1>
            <div className=" flex flex-row text-2xl">
            <div
              className="text-1xl font-bold text-teal-400 mb-6 " // Change text size here and add bottom margin
              ref={typedRef}
              style={{ lineHeight: "1", minHeight: "1.2em" }} // Set min height to prevent shifting
            ></div> 
            </div> 
          </div>

          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover the full potential of your digital products and services
            with Digital Engineering and Design Thinking - the perfect blend of
            technology, user experience, and design that creates remarkable
            solutions. At HyScaler, we empower your business with cutting-edge
            technology services, helping you get to the future of success.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <button className="px-6 py-3 bg-teal-400 text-gray-900 rounded-md hover:bg-teal-300 transition-colors">
              Our Services
            </button>
            <button className="px-6 py-3 border border-teal-400 text-teal-400 rounded-md hover:bg-teal-400 hover:text-gray-900 transition-colors">
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* Image with Animation */}
        <motion.div
          className="max-w-md hidden md:block"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <motion.div animate={controls}>
            <Image
              src={heroImage}
              alt="Futuristic VR Headset"
              className="w-full h-auto"
              layout="intrinsic"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </ClientWrapper>
  );
};

export default Hero;
