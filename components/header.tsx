"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Pro Concrete & Landscaping"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/quote"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-green-600 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-green-600 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-green-600 transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="block text-gray-700 hover:text-green-600 transition-colors"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-green-600 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/quote"
              className="block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-center"
              onClick={toggleMenu}
            >
              Get Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
