"use client"

import Link from "next/link"
import Image from "next/image"

// Default placeholder image path
const PLACEHOLDER_IMAGE = "/placeholder.jpg"

const services = [
  {
    name: "Landscaping",
    description: "Transform your outdoor space with our expert landscaping services",
    href: "/services/landscaping",
    image: PLACEHOLDER_IMAGE,
  },
  {
    name: "Concreting",
    description: "Quality concrete solutions for driveways, paths, and more",
    href: "/services/concreting",
    image: PLACEHOLDER_IMAGE,
  },
  {
    name: "Artificial Grass",
    description: "Low-maintenance, year-round green lawns",
    href: "/services/artificial-grass",
    image: PLACEHOLDER_IMAGE,
  },
  {
    name: "Exposed Concrete",
    description: "Stylish and durable exposed aggregate finishes",
    href: "/services/exposed-concrete",
    image: PLACEHOLDER_IMAGE,
  },
  {
    name: "Retaining Walls",
    description: "Functional and attractive retaining wall solutions",
    href: "/services/retaining-walls",
    image: PLACEHOLDER_IMAGE,
  },
  {
    name: "Mulching",
    description: "Professional mulching services for healthy gardens",
    href: "/services/mulching",
    image: PLACEHOLDER_IMAGE,
  },
  {
    name: "Letterbox Installation",
    description: "Custom letterbox design and installation",
    href: "/services/letterbox-installation",
    image: PLACEHOLDER_IMAGE,
  },
  {
    name: "Paving & Pathways",
    description: "Beautiful and durable paving solutions",
    href: "/services/paving-pathways",
    image: PLACEHOLDER_IMAGE,
  },
  {
    name: "Garden Design",
    description: "Creative and functional garden design services",
    href: "/services/garden-design",
    image: PLACEHOLDER_IMAGE,
  },
  {
    name: "Irrigation Systems",
    description: "Efficient watering solutions for your garden",
    href: "/services/irrigation-systems",
    image: PLACEHOLDER_IMAGE,
  },
  {
    name: "Outdoor Lighting",
    description: "Enhance your outdoor space with strategic lighting",
    href: "/services/outdoor-lighting",
    image: PLACEHOLDER_IMAGE,
  },
  {
    name: "Decking",
    description: "Custom deck design and construction",
    href: "/services/decking",
    image: PLACEHOLDER_IMAGE,
  },
  {
    name: "Pool Surrounds",
    description: "Beautiful and safe pool area solutions",
    href: "/services/pool-surrounds",
    image: PLACEHOLDER_IMAGE,
  },
  {
    name: "Driveway Construction",
    description: "Expert driveway design and construction",
    href: "/services/driveway-construction",
    image: PLACEHOLDER_IMAGE,
  },
  {
    name: "Garden Maintenance",
    description: "Regular garden care and maintenance services",
    href: "/services/garden-maintenance",
    image: PLACEHOLDER_IMAGE,
  },
  {
    name: "Pergolas & Gazebos",
    description: "Custom outdoor structure design and construction",
    href: "/services/pergolas-gazebos",
    image: PLACEHOLDER_IMAGE,
  },
]

export function ServicesPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive landscaping and concrete solutions for your outdoor space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
