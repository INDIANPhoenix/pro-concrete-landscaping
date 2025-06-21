'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pro Concrete & Landscaping</h3>
            <p className="text-gray-300 mb-4">
              Transforming outdoor spaces with professional concrete and landscaping solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-green-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-green-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-300 hover:text-green-500 transition-colors">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/landscaping" className="text-gray-300 hover:text-green-500 transition-colors">
                  Landscaping
                </Link>
              </li>
              <li>
                <Link href="/services/concreting" className="text-gray-300 hover:text-green-500 transition-colors">
                  Concreting
                </Link>
              </li>
              <li>
                <Link href="/services/artificial-grass" className="text-gray-300 hover:text-green-500 transition-colors">
                  Artificial Grass
                </Link>
              </li>
              <li>
                <Link href="/services/garden-design" className="text-gray-300 hover:text-green-500 transition-colors">
                  Garden Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-green-500 transition-colors">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500" />
                <a href="tel:0470432212" className="text-gray-300 hover:text-green-500 transition-colors">
                  0470 432 212
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500" />
                <a
                  href="mailto:proconcretelandscaping@gmail.com"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  proconcretelandscaping@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Pro Concrete & Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
