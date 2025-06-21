"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Hammer, Leaf, Droplets, Lightbulb, Wrench, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ServicesPreview() {
  const [showAll, setShowAll] = useState(false)

  const services = [
    {
      title: "Landscaping Design",
      description: "Transform your outdoor space with our expert landscape design services.",
      icon: Leaf,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/landscaping-design",
      featured: true,
    },
    {
      title: "Concrete Driveways",
      description: "Durable and attractive concrete driveways that enhance your property value.",
      icon: Hammer,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/concrete-driveways",
      featured: true,
    },
    {
      title: "Artificial Grass",
      description: "Low-maintenance artificial grass solutions for year-round green spaces.",
      icon: Leaf,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/artificial-grass",
      featured: true,
    },
    {
      title: "Exposed Concrete",
      description: "Stylish exposed concrete finishes for modern outdoor aesthetics.",
      icon: Hammer,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/exposed-concrete",
      featured: true,
    },
    {
      title: "Retaining Walls",
      description: "Strong and beautiful retaining walls for slope management and design.",
      icon: Hammer,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/retaining-walls",
      featured: true,
    },
    {
      title: "Garden Mulching",
      description: "Professional mulching services to protect and nourish your garden beds.",
      icon: Leaf,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/garden-mulching",
      featured: true,
    },
    // Additional services (shown when "Show More" is clicked)
    {
      title: "Letterbox Installation",
      description: "Custom letterbox installation and design services.",
      icon: Home,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/letterbox-installation",
      featured: false,
    },
    {
      title: "Pool Landscaping",
      description: "Specialized landscaping around pools for safety and beauty.",
      icon: Droplets,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/pool-landscaping",
      featured: false,
    },
    {
      title: "Concrete Patios",
      description: "Custom concrete patios for outdoor entertainment spaces.",
      icon: Hammer,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/concrete-patios",
      featured: false,
    },
    {
      title: "Decorative Concrete",
      description: "Artistic decorative concrete solutions for unique outdoor features.",
      icon: Hammer,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/decorative-concrete",
      featured: false,
    },
    {
      title: "Garden Maintenance",
      description: "Ongoing garden care and maintenance services.",
      icon: Leaf,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/garden-maintenance",
      featured: false,
    },
    {
      title: "Concrete Foundations",
      description: "Strong concrete foundations for various construction projects.",
      icon: Hammer,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/concrete-foundations",
      featured: false,
    },
    {
      title: "Turf Installation",
      description: "Professional turf installation for lush, green lawns.",
      icon: Leaf,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/turf-installation",
      featured: false,
    },
    {
      title: "Irrigation Systems",
      description: "Efficient irrigation systems for automated garden watering.",
      icon: Droplets,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/irrigation-systems",
      featured: false,
    },
    {
      title: "Concrete Repairs",
      description: "Professional concrete repair and restoration services.",
      icon: Wrench,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/concrete-repairs",
      featured: false,
    },
    {
      title: "Outdoor Lighting",
      description: "Beautiful outdoor lighting solutions for ambiance and security.",
      icon: Lightbulb,
      image: "/placeholder.svg?height=300&width=400",
      href: "/services/outdoor-lighting",
      featured: false,
    },
  ]

  const displayedServices = showAll ? services : services.filter((service) => service.featured)

  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Professional Services</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            From concrete work to complete landscape transformations, we offer comprehensive outdoor solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.title}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 p-2 rounded-full">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                    <Button
                      variant="ghost"
                      className="text-green-600 hover:text-green-700 p-0 h-auto font-semibold group/btn"
                      asChild
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            size="lg"
            variant="outline"
            className="bg-white text-green-600 border-white hover:bg-green-50 transition-all duration-300"
          >
            {showAll ? "Show Less Services" : "Show All Services"}
            <ArrowRight className={`ml-2 h-5 w-5 transition-transform ${showAll ? "rotate-180" : ""}`} />
          </Button>
        </div>
      </div>
    </section>
  )
}
