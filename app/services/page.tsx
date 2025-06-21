import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ErrorBoundary from '@/components/error-boundary';
import LoadingSpinner from '@/components/loading-spinner';

const services = [
  {
    title: 'Landscaping',
    description: 'Transform your outdoor space with our professional landscaping services.',
    image: '/images/services/landscaping/main.jpg',
    link: '/services/landscaping',
  },
  {
    title: 'Concreting',
    description: 'Quality concrete solutions for all your construction needs.',
    image: '/images/services/concreting/main.jpg',
    link: '/services/concreting',
  },
  {
    title: 'Artificial Grass',
    description: 'Low-maintenance, year-round green lawns with artificial grass installation.',
    image: '/images/services/artificial-grass/main.jpg',
    link: '/services/artificial-grass',
  },
  {
    title: 'Garden Design',
    description: 'Create your dream garden with our expert design services.',
    image: '/images/services/garden-design/main.jpg',
    link: '/services/garden-design',
  },
  {
    title: 'Irrigation Systems',
    description: 'Efficient watering solutions for your garden and landscape.',
    image: '/images/services/irrigation-systems/main.jpg',
    link: '/services/irrigation-systems',
  },
  {
    title: 'Outdoor Lighting',
    description: 'Enhance your outdoor space with beautiful lighting solutions.',
    image: '/images/services/outdoor-lighting/main.jpg',
    link: '/services/outdoor-lighting',
  },
  // Add more services as needed
];

export default function ServicesPage() {
  return (
    <ErrorBoundary>
      <div className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of landscaping and concrete services designed to transform your outdoor space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.link}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/quote"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </ErrorBoundary>
  );
}
