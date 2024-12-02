'use client'

import React from 'react';
import Link from 'next/link';
import logo from "./hyscaler-logo.svg";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-opacity-80 bg-gray-900">
      <div className="logo cursor-pointer">
        <Image src={logo} alt="Hyscaler Logo" className="h-10" style={{ width: 200 }} />
      </div>
      <nav>
        {/* Full navigation menu for larger screens */}
        <ul className="hidden md:flex">
          <li className="ml-8">
            <Link href="/" className="text-white font-medium hover:text-teal-400 transition-colors">Home</Link>
          </li>
          <li className="ml-8">
            <Link href="/services" className="text-white font-medium hover:text-teal-400 transition-colors">Services</Link>
          </li>
          <li className="ml-8">
            <Link href="/case-studies" className="text-white font-medium hover:text-teal-400 transition-colors">Case Studies</Link>
          </li>
          <li className="ml-8">
            <Link href="/about-us" className="text-white font-medium hover:text-teal-400 transition-colors">About Us</Link>
          </li>
          <li className="ml-8">
            <Link href="/dashboard" className="text-white font-medium hover:text-teal-400 transition-colors">Careers</Link>
          </li>
          <li className="ml-8">
            <Link href="/contact-us" className="text-white font-medium hover:text-teal-400 transition-colors">Contact Us</Link>
          </li>
        </ul>

        {/* Mobile navigation menu */}
        <ul className="flex md:hidden">
          <li className="ml-4">
            <Link href="/" className="text-white font-medium hover:text-teal-400 transition-colors">Home</Link>
          </li>
          <li className="ml-4">
            <Link href="/dashboard" className="text-white font-medium hover:text-teal-400 transition-colors">Careers</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
